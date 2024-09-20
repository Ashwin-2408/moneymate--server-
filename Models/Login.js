const { sequelize } = require("./db");
const { DataTypes } = require("sequelize");
const Login = sequelize.define(
  "Login",
  {
    id: {
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
  },
  {
    tableName: "login",
    timestamps: false,
  }
);

module.exports = Login;
