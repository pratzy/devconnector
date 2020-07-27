var request = require("request");
var options = {
  method: "POST",
  url: "http://localhost:5000/api/users",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Prateek Agarwal",
    email: "pratzy06@gmail.com",
    password: 123456,
  }),
};

req = async () => {
  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(response.body);
  });
};

req();
