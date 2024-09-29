const express = require("express");
const cors = require("cors");
const app = express();

const { sequelize, connect_database } = require("./Models/db");
const Account = require("./Models/Account");
const User = require("./Models/User");
const Expense_category = require("./Models/Expense_Category");
const Income_category = require("./Models/Income_Category");
const Transacton = require("./Models/Transaction");
const Main_Router = require("./Main_Route");
app.use(cors());
app.use(express.json());
app.use("/", Main_Router);
const start_app = async () => {
  try {
    await connect_database();
    await sequelize.sync();
    console.log("models synchronised successfully");
    app.listen(3001, () => {
      console.log({ LOG: "server is listening at port 3001" });
    });
  } catch (error) {
    console.log("Error in the application", error);
  }
};

start_app();
