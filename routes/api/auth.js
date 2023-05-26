const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const connection = require("../../database/db");
const { key, keyPub } = require("../../keys");

const fs = require("fs");

// CONNEXION
router.post("/", (req, res) => {
  const { email, pswd } = req.body;
  try {
    const sql = `SELECT * FROM user WHERE email = "${email}"`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        const user = result[0];
        if (user) {
          if (bcrypt.compareSync(pswd, user.password)) {
            const token = jwt.sign({}, key, {
              subject: user.id.toString(),
              expiresIn: 3600 * 24 * 30 * 6,
              algorithm: "RS256",
            });
            res.cookie("myNewsToken", token, {httpOnly: true});
            console.log(token);
            res.send(user);
          } else {
            res.send(JSON.stringify(null));
          }
        } else {
          res.send(JSON.stringify(null));
        }
      } else {
        res.send(JSON.stringify(null));
      }
    });
  } catch (error) {
    res.send(JSON.stringify(null));
  }
});

router.get("/current", async (req, res) => {
  const { myNewsToken } = req.cookies;

  console.log({ myNewsToken });
  if (myNewsToken) {
    try {
      const decodedToken = jwt.verify(myNewsToken, keyPub);
      console.log(decodedToken);

      const sql = `SELECT id, email, pseudo, rôle FROM user WHERE id = ${decodedToken.sub}`;

      connection.query(sql, (err, result) => {
        if (err) throw err;
        const currentUser = result[0];
        console.log(currentUser);
        if (currentUser) {
          res.send(currentUser);
        } else {
          res.send(JSON.stringify(null));
        }
      });
    } catch (error) {
      res.send(JSON.stringify(null));
    }
  } else {
    res.send(JSON.stringify(null));
  }
});

router.delete("/", (req, res) => {
  res.clearCookie("myNewsToken");
  res.end();
});

module.exports = router;
