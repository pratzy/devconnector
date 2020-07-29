import request from "request";
var options = {
  method: "POST",
  url: "http://localhost:5000/api/users",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Prateek Agarwal",
    email: "mail.prateek.agarwal@gmail.com",
    password: "123456",
  }),
};

request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});
