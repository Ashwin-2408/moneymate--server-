const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Expense_category = sequelize.define(
  "Expense_Category",
  {
    Category_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "UserID",
      },
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
    tableName: "Expense_Category",
    timestamps: true,
  }
);

module.exports = Expense_category;
