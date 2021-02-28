"use strict";
const responseFormat = (records, res) => {
  res.status(200).json({
    code: 0,
    msg: "Success",
    records
  });
};

module.exports = { responseFormat }