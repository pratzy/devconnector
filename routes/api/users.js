const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route    POST api/users
// @desc     Test route
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Enter valid email").isEmail(),
    check("password", "Please enter a valid password with min 6").isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    console.log("Received request: ", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.send("User route");
  }
);

module.exports = router;
