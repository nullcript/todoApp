"use strict";

// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});


module.exports = pool.promise();
