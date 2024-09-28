const pool = require("../db_connection");

const Login_controllers = {
  signup: async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      return res.status(400).send({ ERR: "invalid body request" });
    } else {
      let connection;
      try {
        connection = await pool.getConnection();

        await connection.beginTransaction();
        const [rows, columns] = await pool.query(
          "select * from user where Email=? ",
          Email
        );
        if (rows.length == 0) {
          await pool.query("Insert into user(Email,Password) values(?,?)", [
            Email,
            Password,
          ]);
          await connection.commit();
          return res
            .status(200)
            .send({ LOG: "Successfully registered", Message: "Success" });
        } else {
          await connection.rollback();
          return res.status(403).send({ ERR: "Email is already registered" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  login: async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) {
      res.status(400).send({ ERR: "Invalid body request" });
    } else {
      let connection;
      try {
        connection = await pool.getConnection();
        connection.beginTransaction();
        const [rows, columns] = await pool.query(
          "select * from user where email=?",
          [Email]
        );
        if (rows.length === 0) {
          connection.rollback();
          return res.status(400).send({ ERR: "Email isn't registered" });
        } else if (rows[0].Password !== Password) {
          console.log(rows);
          console.log(rows.Password);
          connection.rollback();
          return res.status(400).send({ ERR: "passowrd is incorrect" });
        } else if (rows[0].Password === Password) {
          await connection.commit();
          return res.status(200).send({ MSG: "Success" });
        }
      } catch (error) {
        console.log("The error is:", error);
      }
    }
  },
};

module.exports = Login_controllers;
