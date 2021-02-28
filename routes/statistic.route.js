"use strict";
const express = require("express");
const router = express.Router();
const countsService = require("../modules/statistic/statistic.service");
const countValidation = require("../middlewares/statistic.validation");
router.post('/', countValidation, countsService.find);

module.exports = router;