const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");
const User = sequelize.define(
  "User",
  {
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW, // This is okay but optional
    },
  },
  {
    tableName: "user",
    timestamps: true,
  }
);

module.exports = User;
