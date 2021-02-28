"use strict";

const express = require("express");
const app = express.Router();
const counts = require("./routes/statistic.route");
app.use("/statistics", counts);

module.exports = app;