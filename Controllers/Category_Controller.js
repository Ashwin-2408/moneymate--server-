const e = require("express");
const pool = require("../db_connection");
const { Category } = require("@mui/icons-material");

const Category_Controller = {
  Add_Expense_Category: async (req, res) => {
    const { Category_Name, UserID } = req.body;
    if (!Category_Name || !UserID) {
      return res.status(400).send({ ERR: "Bad body request" });
    }
    let connection;

    try {
      connection = await pool.getConnection();
      await connection.beginTransaction();
      const query =
        "select Category_Name from Expense_Category where Category_Name=? && UserID=?";
      const [rows] = await connection.query(query, [Category_Name, UserID]);
      if (rows.length !== 0) {
        connection.rollback();
        return res.status(400).send("Category already exists");
      } else {
        const query =
          "Insert into  Expense_Category(Category_Name,User_Id) values (?,?)";
        await connection.query(query, [Category_Name, UserID]);
        await connection.commit();
        return res.status(200).send({ LOG: "category added" });
      }
    } catch (error) {
      if (connection) await connection.rollback();
      console.error(error);
      return res.status(500).send({ ERR: "Server error" });
    } finally {
      if (connection) {
        connection.release();
      }
    }
  },
  Delete_Expense: async (req, res) => {
    const { UserID, Category_Name } = req.body;
  },
};
