const express = require("express");
const router = express.Router();
const Category_Controller = require("../Controllers/Category_Controller");

router.post("/Add_Expense", async (req, res) => {
  Category_Controller.Add_Expense_Category(req, res);
});
router.delete("/Delete_Expense", async (req, res) => {
  Category_Controller.Delete_Expense(req, res);
});

module.exports = router;
