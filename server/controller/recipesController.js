const getRecipes = require("../services/getRecipes");

exports.list = async (req, res) => {
  const searchText = req.query.searchText;
  try {
    const data = await getRecipes(searchText);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
