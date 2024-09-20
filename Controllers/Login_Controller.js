const pool = require("../db_connection");

const Login_controllers = {
  signup: async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email | !Password) {
      return res.status(400).send({ ERR: "invalid body request" });
    } else {
      try {
        const [rows, fields] = await pool.query(
          "select * from login where Email=? ",
          Email
        );
        if (rows.length == 0) {
          await pool.query("Insert into login(Email,Password) values(?,?)", [
            Email,
            Password,
          ]);
          return res.status(200).send({ LOG: "Successfully registered" });
        } else {
          return res.status(403).send({ ERR: "Email is already registered" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
};

module.exports=Login_controllers