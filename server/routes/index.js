const router = require("express").Router();

const recipesRouter = require("./recipes");

// Execute /api
module.exports = function() {
  router.use("/recipes", recipesRouter());

  return router;
};
