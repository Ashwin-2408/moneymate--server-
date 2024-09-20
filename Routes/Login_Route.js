const express = require("express");
const router = express.Router();
const Login_Controllers = require("../Controllers/Login_Controller");
router.use("/Signup", (req, res) => {
  Login_Controllers.signup(req, res);
});

module.exports = router;
