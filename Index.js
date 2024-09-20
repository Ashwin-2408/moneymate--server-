const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.listen(3001, (err) => {
  if (err) {
    console.log({ "ERR": "server is not listening at port 3000" });
  } else {
    console.log({ "LOG": "server is listening at port 3000" });
  }
});
