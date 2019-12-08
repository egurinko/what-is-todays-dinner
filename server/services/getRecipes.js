require("dotenv").config();
const config = require("../../config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const parser = { useNewUrlParser: true, useUnifiedTopology: true };

const NUMBER_OF_ITEMS = 20;

module.exports = async (searchText, currentPage) => {
  const client = MongoClient(config.db.mongoURL, parser);

  try {
    await client.connect();
    const db = client.db(config.db.dbName);

    let find = {};

    if (searchText === "") {
      find = await db
        .collection("recipes")
        .find()
        .skip((currentPage - 1) * NUMBER_OF_ITEMS)
        .limit(NUMBER_OF_ITEMS);
    } else {
      find = await db
        .collection("recipes")
        .find({
          recipeMaterial: { $all: [searchText] }
        })
        .skip((currentPage - 1) * NUMBER_OF_ITEMS)
        .limit(NUMBER_OF_ITEMS);
    }

    let data = await find.toArray();
    const total = await db.collection("recipes").countDocuments();

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
