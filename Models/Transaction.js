const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Transaction = sequelize.define(
  "Transaction",
  {
    Transaction_ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    User_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "UserID",
      },
    },
    Transaction_Type: {
      type: DataTypes.ENUM("Expense", "Income"),
      allowNull: false,
    },
    Transaction_Amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    Category_Name: {
      type: DataTypes.STRING,
      allowNull: false,
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
