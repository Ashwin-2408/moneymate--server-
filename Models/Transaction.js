const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Transaction = sequelize.define(
  "Transaction",
  {
    Transaction_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNULL: false,
      unique: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNULL: false,
      references: {
        model: "user",
        key: "UserID",
      },
    },
    Transaction_Type: {
      type: DataTypes.ENUM("Expense", "Income"),
      allowNULL: false,
    },
    Transaction_Amount: {
      type: DataTypes.DOUBLE,
      allowNULL: false,
    },
    Category_Name: {
      type: DataTypes.STRING,
      allowNULL: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Transaction",
    timestamps: true,
  }
);

module.exports = Transaction;
