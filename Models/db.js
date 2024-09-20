const Sequelize = require("sequelize");
const config = require("../Config/config.json");
const environment = "development";
const dbconfig = config[environment];
const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    dialect: dbconfig.dialect,
  }
);
const connect_database = async () => {
  try {
    await sequelize.authenticate();
    console.log("database has been successfully connected");
  } catch (err) {
    console.log(err);
  }
};

module.exports={sequelize,connect_database};