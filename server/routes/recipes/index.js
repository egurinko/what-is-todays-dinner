const router = require("express").Router();
const recipesController = require("../../controller/recipesController");

module.exports = () => {
  router.get("/", (req, res) => {
    return recipesController.list(req, res);
  });

  return router;
};
