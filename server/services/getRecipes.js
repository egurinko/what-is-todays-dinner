const axios = require("axios");
require("dotenv").config();
const RAKETEN_APPLICATION_ID = process.env.RAKETEN_APPLICATION_ID;

const config = require("../../config");
const MongoClient = require("mongodb").MongoClient;
const parser = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = async () => {
  const client = MongoClient(config.db.mongoURL, parser);
  try {
    await client.connect();
    const db = client.db(config.db.dbName);

    const data = await db
      .collection("recipes")
      .find()
      .toArray();

    client.close();
    return data;
  } catch (err) {
    console.log(err);
  }
};
