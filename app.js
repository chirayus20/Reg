const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const con = require("./sql");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/reg.html"));
});
app.post("/", (req, res) => {
  var uname = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  const data = `insert into emp(username,email,password)values('${uname}','${email}','${password}')`;
  con.query(data, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(5000, () => {
  console.log("listening");
});
