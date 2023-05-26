const connection = require("../../database/db");

const router = require("express").Router();

// INSERT
router.post("/", async (req, res) => {
  const { title, type, content } = req.body;

  const sql = `INSERT INTO news(title, type, date, content) VALUES("${title}", "${type}", DATE( NOW() ), "${content}")`;

  console.log(sql);
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("News insert in database");
    res.send(JSON.stringify(result));
  });
});

router.get("/read", async (req, res) => {
  const sql = "SELECT * FROM news ORDER BY id DESC";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

router.get("/count", async (req, res) => {
  const count = "SELECT * FROM news";

  connection.query(count, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result.length));
  });
});

module.exports = router;
