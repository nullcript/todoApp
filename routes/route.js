"use strict";

//* ---------| IMPORTED MODULES |-
//? Custom
const todoController = require("../controller/todoController");

//? Core

//? NPM
const express = require("express");
const router = express.Router();

//* ---------| Method:Route |-
//? CRUD Operations
router.get("/", todoController.readHandler);
router.post("/", todoController.createtHandler);
router.get("/delete/:id", todoController.deleteHandler);
router.get("/complete/:id", todoController.completeHandler);

//? API OPERATION /api
router.get("/api", todoController.staticApiHandler);
router.get("/api/:id", todoController.dynamicApiHandler);

//* ---------| EXPORT MODULE |-
module.exports = router;
