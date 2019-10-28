const getRecipes = require("../services/getRecipes");

exports.list = async (req, res) => {
  try {
    const data = await getRecipes("HELLO");
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
