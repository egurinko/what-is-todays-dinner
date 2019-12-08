const getRecipes = require("../services/getRecipes");

exports.list = async (req, res) => {
  const searchText = req.query.searchText;
  const currentPage = req.query.currentPage;
  try {
    const data = await getRecipes(searchText, currentPage);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};
