const express = require("express");
const Login_Route = require("./Routes/Login_Route");
const Category_Routes = require("./Routes/Category_Routes");
const router = express.Router();
router.use("/Auth", Login_Route);
router.use("/Category", Category_Routes);

module.exports = router;
