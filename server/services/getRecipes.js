require("dotenv").config();
const config = require("../../config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const parser = { useNewUrlParser: true, useUnifiedTopology: true };

const NUMBER_OF_ITEMS = 12;

module.exports = async (searchText, currentPage) => {
  const client = MongoClient(config.db.mongoURL, parser);

  try {
    await client.connect();
    const db = client.db(config.db.dbName);

    let find = {};
    let data = [];
    let total = 0;

    if (searchText === "") {
      find = await db.collection("recipes").find();
      total = await find.count();

      data = await find
        .skip((currentPage - 1) * NUMBER_OF_ITEMS)
        .limit(NUMBER_OF_ITEMS)
        .toArray();
    } else {
      find = await db.collection("recipes").find({
        recipeMaterial: { $all: [searchText] }
      });
      total = await find.count();

      data = await find
        .skip((currentPage - 1) * NUMBER_OF_ITEMS)
        .limit(NUMBER_OF_ITEMS)
        .toArray();
    }

    client.close();
    return {
      data,
      pageInfo: {
        total,
        currentPage
      }
    };
  } catch (err) {
    console.log(err);
  }
};
