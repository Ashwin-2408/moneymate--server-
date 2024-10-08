const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Account = sequelize.define(
  "Account",
  {
    accountID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,

      references: {
        model: "user", // Name of the Users table
        key: "userID",
      },
    },

    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },

    Income: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    Expense: {
      type: DataTypes.FLOAT,
      allowNUll: false,
      defaultValue: 0.0,
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
    tableName: "Accounts", // Name of the table
    timestamps: true, // Sequelize will automatically add createdAt and updatedAt
  }
);

module.exports = Account;
