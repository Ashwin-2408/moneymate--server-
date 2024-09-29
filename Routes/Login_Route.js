const express = require("express");
const router = express.Router();
const Login_Controllers = require("../Controllers/Login_Controller");
router.post("/Signup", (req, res) => {
  Login_Controllers.Signup(req, res);
});
router.get("/Login", (req, res) => {
  Login_Controllers.login(req, res);
});

module.exports = router;
