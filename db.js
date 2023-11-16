const { Sequelize } = require("sequelize");

// const DB = "sql8662488";
// const USER = "sql8662488";
// const PASS = "QdYQT6pvP9";
// const HOST = "sql8.freesqldatabase.com";

const DB = process.env.DB;
const USER = process.env.USER;
const PASS = process.env.PASS;
const HOST = process.env.HOST;

// setup the connection parameters
const sequelize = new Sequelize(DB, USER, PASS, {
  dialect: "mysql",
  host: HOST,
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { sequelize, connectToDB };
