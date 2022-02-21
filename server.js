require("dotenv").config();
const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose");

//  db Connection
const db = require("./database/database.js");

db.connect();

const app = express();

app.get("pr", () => {
  console.log("Test is successfull");
});

const listener = app.listen(process.env.PORT || 3500, () => {
  console.log(`Yor App is listening on port ${listener.address().port}`);
});
