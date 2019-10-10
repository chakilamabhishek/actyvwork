/**
 * Express is a Node.js web application framework
 */
const express = require("express");
const bodyParser = require("body-parser");

/**
 * Initializing the express routers.
 */
const app = express();
const path=require('path');
const users = require("./routes/index");
const profile = require("./routes/profile");

/**
 * Initializing the mongoose connection.
 */

require("./connection/mongoose");

/**
 * Body Parser: The body-parser is used to extracts the entire body portion of an incoming request stream and exposes it on req.body.
 * The body parser is used to handle the data easily.It will parse the text as JSON body.
 */

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/profile", profile);
module.exports = app;
