const express = require("express");
const router = express.Router();
const Login_Controllers = require("../Controllers/Login_Controller");
router.post("/Signup", (req, res) => {
  Login_Controllers.signup(req, res);
});
router.use("/Login",(req,res)=>{
  Login_Controllers.login(req,res);
})

module.exports = router;
