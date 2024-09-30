const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Income_category = sequelize.define(
  "Income_Category",
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
      unique: true,
      references: {
        model: "user",
        key: "UserID",
      },
    },
    Category_Name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    tableName: "Income_Category",
    timestamps: true,
  }
);

module.exports = Income_category;
