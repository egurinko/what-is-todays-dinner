require("dotenv").config();
const domain = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const env = process.env.NODE_ENV;

module.exports =
  // env === "development"
  //   ? {
  //       db: {
  //         dbName: "what-is-todays-dinner",
  //         mongoURI: "mongodb://127.0.0.1:27017",
  //         mongoURL: "mongodb://127.0.0.1:27017"
  //       }
  //     }
  // :
  {
    db: {
      dbName: dbName,
      mongoURI: domain,
      mongoURL: domain
    }
  };
