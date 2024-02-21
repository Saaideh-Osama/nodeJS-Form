const http = require("http");
const express = require("express");
var app = express();

var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server is running on port 7000");
});

app.get("/", function (req, res) {
  res.send("server is running on port 7000");
});
app.get("/form", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});
app.post("/submitform", urlencodedParser, function (req, res) {
  res.send(
    "data submitted successfully" + req.body.email + " " + req.body.password
  );
});
