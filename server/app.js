// BASIC EXPRESS SETUPs

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cron = require("node-cron");
const fs = require("fs");
const apiRouter = require("./routes")();
const makeRecipes = require("./services/makeRecipes");

const app = express();

let n = 39;

// cron.schedule("*/10 * * * * *", () => {
//   console.log("Making a comfort index");
//   makeRecipes(n);
//   n++;
//   console.log("CATEGORY ID", n);
// });

// LOGGING SETTINGs
app.use(
  morgan(
    ":remote-addr - :remote-user [:date[clf]] ':method :url HTTP/:http-version' :status :res[content-length] :response-time ms"
  )
);

// URL Encode for POST requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Extract JSON data from POST requests
app.use(bodyParser.json());

// CROSS DOMAIN
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token"
  );

  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
};
app.use(allowCrossDomain);

// SEND TO APIs
app.use(
  "/api", // add additional middleware to the server, mounted on the /api/ path
  apiRouter
);

// SERVE STATIC FILEs
app.use(express.static(path.join(__dirname, "/../dist/")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../dist/index.html"));
});

module.exports = app;
