const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];
const waitingList = [];

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "./tables.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "./reserve.html"));
});

app.use(express.static("./assets"));

app.listen(PORT, function () {
  console.log("app listening on PORT " + PORT);
});
