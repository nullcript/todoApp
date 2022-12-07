"use strict";

// Imported Moduels
const path = require("node:path");

const rootDir = path.dirname(require.main.filename);
const port = process.env.PORT | 3000;
const hostname = "127.0.0.1";
const appName = "TODO";


module.exports = {
    rootDir,
    port,
    hostname,
    appName
};
