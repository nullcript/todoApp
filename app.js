"use strict";

//* ---------| IMPORTED MODULES |-
//? Custom
const { rootDir, port, hostname, appName } = require("./utils/config");
const serveStatics = require("./utils/serveStatic");

//? Core
const path = require("node:path");

//? NPM
const express = require("express");
const app = express();

//* ---------| CONFIG |-
app.set("views", path.join(rootDir, "views"));
app.set("view engine", "ejs");

//* ---------| MIDDLEWARE and SERVESTATICS |-
app.use(express.urlencoded({ extended: false }));
serveStatics(app);

//* ---------| ROUTES |-
app.use(require("./routes/route"));
app.use(require("./routes/notFound404"));

//* ---------| LISTENER |-
app.listen(port, hostname, () => {
    console.log(
        `-> Server is running on ${hostname}:${port} || localhost:${port}`
    );
    console.log(`-> Welcome to ${appName} web application`);
});