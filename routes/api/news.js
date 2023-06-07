const connection = require("../../database/db");

const router = require("express").Router();

// INSERT
router.post("/", async (req, res) => {
  const { title, type, content } = req.body;

  const sql = `INSERT INTO news(title, type, date, content) VALUES("", "", DATE( NOW() ), "?")`;
  const value = [title, type, content];

  console.log(sql);
  connection.query(sql, value, (err, result) => {
    if (err) throw err;
    console.log("News insert in database");
    res.send(JSON.stringify(result));
  });
});

// SELECT
router.get("/read", async (req, res) => {
  const sql = "SELECT * FROM news ORDER BY id DESC";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter / 1");
    res.send(JSON.stringify(result));
  });
});

router.get("/resume", async (req, res) => {
  const id = req.query.id;

  const sql = "SELECT * FROM news WHERE id = ?";
  const value = id;

  connection.query(sql, value, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter / 2");
    res.send(JSON.stringify(result));
  });
});

// UPDATE
router.get("/count", async (req, res) => {
  const id = req.query.id;

  const sql = "UPDATE news SET viewCounter = viewcounter + 1 WHERE id = ?";
  const value = id;

  connection.query(sql, value, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter / 3");
    res.send(JSON.stringify(result));
  });
});

router.get("/last", async (req, res) => {
  const sql = "SELECT * FROM news ORDER BY id DESC LIMIT 10";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter / 4");
    res.send(JSON.stringify(result));
  });
});

router.get("/theme", async (req, res) => {
  const t = req.query.t;
  const sql = `SELECT * FROM news WHERE type LIKE "${t}" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

router.get("/musique", async (req, res) => {
  const t = req.query.t;
  const sql = `SELECT * FROM news WHERE type LIKE "MUSIQUE" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

router.get("/jv", async (req, res) => {
  const sql = `SELECT * FROM news WHERE type LIKE "JEUX VIDEO" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

router.get("/cinema", async (req, res) => {
  const sql = `SELECT * FROM news WHERE type LIKE "CINEMA" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

router.get("/event", async (req, res) => {
  const sql = `SELECT * FROM news WHERE type LIKE "EVENEMENT" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter");
    res.send(JSON.stringify(result));
  });
});

module.exports = router;
