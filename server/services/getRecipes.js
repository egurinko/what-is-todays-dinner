const axios = require("axios");
require("dotenv").config();
const RAKETEN_APPLICATION_ID = process.env.RAKETEN_APPLICATION_ID;

module.exports = params => {
  let result = "";
  return axios
    .get(
      `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${RAKETEN_APPLICATION_ID}`
    )
    .then(res => {
      return Promise.resolve(res.data.result);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};
