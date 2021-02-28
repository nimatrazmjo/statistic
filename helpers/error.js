"use strict";
const handleError = (err, res) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },
  });
};

module.exports = { handleError }