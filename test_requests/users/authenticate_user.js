var request = require("request");
var options = {
  method: "POST",
  url: "http://localhost:5000/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "mail.prateek.agarwal@gmail.com",
    password: "123456",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
