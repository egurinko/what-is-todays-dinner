const axios = require("axios");
require("dotenv").config();
const RAKETEN_APPLICATION_ID = process.env.RAKETEN_APPLICATION_ID;

const config = require("../../config");
const MongoClient = require("mongodb").MongoClient;
const parser = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = categoryId => {
  return axios
    .get(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&categoryId=${categoryId}&applicationId=${RAKETEN_APPLICATION_ID}`
    )
    .then(async res => {
      const recipes = res.data.result;
      const client = MongoClient(config.db.mongoURL, parser);

      // TIMESTAMP
      const date = new Date();
      const a = date.getTime();
      try {
        await client.connect();
        const db = client.db(config.db.dbName);

        return db
          .collection("recipes")
          .insertMany(recipes)
          .then(res => {
            console.log("RDS", res);
            return res.ops;
          })
          .finally(() => {
            console.log("Closed MONGODB connection successfully");
            client.close();
          });
      } catch (err) {
        console.log(err);
      }
      return Promise.resolve(res);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
