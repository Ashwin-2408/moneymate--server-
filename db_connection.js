const mysql=require("mysql2/promise")

const config = require("./Config/config.json");
const dbconfig = config["development"];

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: dbconfig.password,
  database: dbconfig.database,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
