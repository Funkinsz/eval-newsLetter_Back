const bcrypt = require("bcrypt");
const connection = require("../../database/db");

const fs = require("fs");

const router = require("express").Router();

// INSERT USER
router.post("/", async (req, res) => {
  const pseudo = req.body.pseudo;
  const email = req.body.email;
  const pswd = req.body.pswd;
  
  const hashpswd = await bcrypt.hash(pswd, 8);

  const verify = `SELECT email FROM user WHERE email = "${email}"`;
  connection.query(verify, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      console.log("email exist");
      res.send(JSON.stringify("User exist"));
    } else {
      const sql = `INSERT INTO user(email, password, rôle, pseudo) VALUE("${email}", "${hashpswd}", 0, "${pseudo}")`;

      connection.query(sql, (err, resulta) => {
        if (err) throw err;
        console.log("User add to DB");
        res.send(JSON.stringify("New user"));
      });
    }
  });
});

module.exports = router;
