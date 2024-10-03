const { Sequelize, DataTypes } = require("sequelize");
const Expense_category = require("../Models/Expense_Category");
const { cardActionAreaClasses } = require("@mui/material");

const Category_Controller = {
  Add_Expense_Category: async (req, res) => {
    const { Category_Name, UserID } = req.body;
    if (!Category_Name || !UserID) {
      return res.status(400).send({ ERR: "Bad body request" });
    }

    try {
      const categories = await Expense_category.findAll({
        where: { UserID: UserID, Category_Name: Category_Name },
      });
      console.log(categories);
      if (categories.length !== 0) {
        return res.status(400).send("Category already exists");
      } else {
        await Expense_category.create({
          Category_Name: Category_Name,
          UserID: UserID,
        });

        return res.status(200).send({ LOG: "category added" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).send({ ERR: "Server error" });
    }
  },
  Delete_Expense: async (req, res) => {
    const UserID = req.query.UserID;
    const Category_Name = req.query.Category_Name;
    if (!UserID || !Category_Name) {
      return res.status(400).send({ ERR: "bad body request" });
    }

    try {
      await Expense_category.destroy({
        where: {
          UserID: UserID,
          Category_Name: Category_Name,
        },
      });
      res.status(200).send({ LOG: "successfully deleted" });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ ERR: "server error" });
    }
  },
  Modify_Expense: async (req, res) => {
    const { Category_Id, UserID, Category_Name } = req.body;
    try {
      await Expense_category.update(
        { Category_Name: Category_Name },
        {
          where: {
            Category_Id: Category_Id,
            UserID: UserID,
          },
        }
      );
      return res.status(200).send("Expense Updated");
    } catch (error) {
      console.log(error);
      return res.status(500).send({ ERR: "server error" });
    }
  },
};

module.exports = Category_Controller;
