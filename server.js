const express = require("express");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();
const request = require("request");

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname + "/dist"));

// send the user to index html page inspite of the url
app.get("/", cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname + "/dist", "index.html"));
});

app.get("/samtliga", cors(), (req, res) => {
  const URL = "https://content.viaplay.se/pc-se/serier/samtliga";
  request(URL, (error, response, body) => {
    res.send(body);
  });
});

app.listen(port);
