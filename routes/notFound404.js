"use strict";

const express = require("express");
const router = express.Router();

router.use((req, res) => {
    res.status(404).send("404 Error / page not found");
});

module.exports = router;
