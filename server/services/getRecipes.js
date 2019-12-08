require("dotenv").config();
const config = require("../../config");
const MongoClient = require("mongodb").MongoClient;
const parser = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = async searchText => {
  const client = MongoClient(config.db.mongoURL, parser);
  try {
    await client.connect();
    const db = client.db(config.db.dbName);

    let data = await db
      .collection("recipes")
      .find()
      .toArray();

    if (searchText !== "") {
      data = data.filter(recipe => {
        return recipe.recipeMaterial.includes(searchText);
      });
    }

    client.close();
    return data;
  } catch (err) {
    console.log(err);
  }
};
