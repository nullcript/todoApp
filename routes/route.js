"use strict";

//* ---------| IMPORTED MODULES |-
//? Custom
const xController = require('../controller/xController');

//? Core
const path = require("node:path");

//? NPM
const express = require("express");
const router = express.Router();


//* ---------| Method:Route |-
//? -----| Get:/ |-
router.get("/", xController.mainRespond);


//* ---------| EXPORT MODULE |-
module.exports = router;
