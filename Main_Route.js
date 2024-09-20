const express = require("express");
const Login_Route = require("./Routes/Login_Route");
const router = express.Router();
router.use("/Auth", Login_Route);

module.exports = router;
