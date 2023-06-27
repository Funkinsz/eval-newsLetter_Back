const connection = require("../../database/db");

const router = require("express").Router();

// INSERT
router.post("/", async (req, res) => {
  const { title, type, content } = req.body;

  const sql = `INSERT INTO news(title, type, date, content) VALUES("", "", DATE( NOW() ), "?")`;
  const value = [title, type, content];

  connection.query(sql, value, (err, result) => {
    if (err) throw err;
    console.log("News insert in database");
    res.send(JSON.stringify(result));
  });
});

// SELECT
router.get("/read", async (req, res) => {
  const user = req.query.user;

  connection.query("SELECT * FROM news ORDER BY idNews DESC", (err, result) => {
    if (err) throw err;
    if (user) {
      liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
      connection.query(liked, (err, resLiked) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
          result[i].isLike = 0;
        }

        const fusion = resLiked.concat(result);

        const array = [...new Set(fusion)];

        idNewsSet = new Set();

        const updateArray = array.map((obj) => {
          if (idNewsSet.has(obj.idNews)) {
            obj.isLike = 1;
          } else {
            idNewsSet.add(obj.idNews);
          }
          return obj;
        });

        const filterArray = updateArray.filter((object) =>
          object.hasOwnProperty("title")
        );
        res.send(JSON.stringify(filterArray));
      });
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

router.get("/readHome", async (req, res) => {
  const user = req.query.user;

  const sql =
    "SELECT n.* FROM news AS n LEFT JOIN (SELECT idNews FROM news ORDER BY idNews DESC LIMIT 3) AS subquery ON n.idNews = subquery.idNews WHERE subquery.idNews IS NULL ORDER BY idNews DESC LIMIT 6";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (user) {
      liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
      connection.query(liked, (err, resLiked) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
          result[i].isLike = 0;
        }

        const fusion = resLiked.concat(result);

        const array = [...new Set(fusion)];

        idNewsSet = new Set();

        const updateArray = array.map((obj) => {
          if (idNewsSet.has(obj.idNews)) {
            obj.isLike = 1;
          } else {
            idNewsSet.add(obj.idNews);
          }
          return obj;
        });

        const filterArray = updateArray.filter((object) =>
          object.hasOwnProperty("title")
        );
        res.send(JSON.stringify(filterArray));
      });
    } else {
      console.log("Reading news letter / 1");
      res.send(JSON.stringify(result));
    }
  });
});

router.get("/moreView", async (req, res) => {
  const user = req.query.user;

  connection.query(
    "SELECT * FROM news ORDER BY viewCounter DESC LIMIT 4",
    (err, result) => {
      if (err) throw err;
      if (user) {
        liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
        connection.query(liked, (err, resLiked) => {
          if (err) throw err;

          for (let i = 0; i < result.length; i++) {
            result[i].isLike = 0;
          }

          const fusion = resLiked.concat(result);

          const array = [...new Set(fusion)];

          idNewsSet = new Set();

          const updateArray = array.map((obj) => {
            if (idNewsSet.has(obj.idNews)) {
              obj.isLike = 1;
            } else {
              idNewsSet.add(obj.idNews);
            }
            return obj;
          });

          const filterArray = updateArray.filter((object) =>
            object.hasOwnProperty("title")
          );
          res.send(JSON.stringify(filterArray));
        });
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

router.get("/moreLike", async (req, res) => {
  const user = req.query.user;

  connection.query(
    "SELECT * FROM news ORDER BY liked DESC LIMIT 4",
    (err, result) => {
      if (err) throw err;
      if (user) {
        liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
        connection.query(liked, (err, resLiked) => {
          if (err) throw err;

          for (let i = 0; i < result.length; i++) {
            result[i].isLike = 0;
          }

          const fusion = resLiked.concat(result);

          const array = [...new Set(fusion)];

          idNewsSet = new Set();

          const updateArray = array.map((obj) => {
            if (idNewsSet.has(obj.idNews)) {
              obj.isLike = 1;
            } else {
              idNewsSet.add(obj.idNews);
            }
            return obj;
          });

          const filterArray = updateArray.filter((object) =>
            object.hasOwnProperty("title")
          );
          res.send(JSON.stringify(filterArray));
        });
      } else {
        res.send(JSON.stringify(result));
      }
    }
  );
});

router.get("/resume", async (req, res) => {
  const id = req.query.id;
  const user = req.query.user;

  const sql = `SELECT * FROM news WHERE idNews = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (user) {
      const liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
      connection.query(liked, (err, resLiked) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
          result[i].isLike = 0;
        }

        const fusion = resLiked.concat(result);

        const array = [...new Set(fusion)];

        idNewsSet = new Set();

        const updateArray = array.map((obj) => {
          if (idNewsSet.has(obj.idNews)) {
            obj.isLike = 1;
          } else {
            idNewsSet.add(obj.idNews);
          }
          return obj;
        });

        const filterArray = updateArray.filter((object) =>
          object.hasOwnProperty("title")
        );
        res.send(JSON.stringify(filterArray[0]));
      });
    } else {
      console.log("Reading news letter / 2");
      res.send(JSON.stringify(result));
    }
  });
});

router.get("/last", async (req, res) => {
  const user = req.query.user;
  const sql = "SELECT * FROM news ORDER BY idNews DESC LIMIT 3";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (user) {
      liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
      connection.query(liked, (err, resLiked) => {
        if (err) throw err;

        for (let i = 0; i < result.length; i++) {
          result[i].isLike = 0;
        }

        const fusion = resLiked.concat(result);

        const array = [...new Set(fusion)];

        idNewsSet = new Set();

        const updateArray = array.map((obj) => {
          if (idNewsSet.has(obj.idNews)) {
            obj.isLike = 1;
          } else {
            idNewsSet.add(obj.idNews);
          }
          return obj;
        });

        const filterArray = updateArray.filter((object) =>
          object.hasOwnProperty("title")
        );
        res.send(JSON.stringify(filterArray));
      });
    } else {
      console.log("Reading news letter / 4");
      res.send(JSON.stringify(result));
    }
  });
});

router.get("/theme", async (req, res) => {
  const t = req.query.t;
  const user = req.query.user;
  const sql = `SELECT * FROM news WHERE type LIKE "${t}" ORDER BY viewCounter DESC LIMIT 5`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    if (user) {
      const liked = `SELECT * FROM liked WHERE idUser = ${user} AND isLike = 1`;
      connection.query(liked, (err, resLiked) => {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
          result[i].isLike = 0;
        }

        const fusion = resLiked.concat(result);

        const array = [...new Set(fusion)];

        idNewsSet = new Set();

        const updateArray = array.map((obj) => {
          if (idNewsSet.has(obj.idNews)) {
            obj.isLike = 1;
          } else {
            idNewsSet.add(obj.idNews);
          }
          return obj;
        });

        const filterArray = updateArray.filter((object) =>
          object.hasOwnProperty("title")
        );
        res.send(JSON.stringify(filterArray));
      });
    } else {
      console.log("Reading news letter");
      res.send(JSON.stringify(result));
    }
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

// UPDATE
router.get("/count", async (req, res) => {
  const id = req.query.id;

  const sql = "UPDATE news SET viewCounter = viewcounter + 1 WHERE idNews = ?";
  const value = id;

  connection.query(sql, value, (err, result) => {
    if (err) throw err;
    console.log("Reading news letter / 3");
    res.send(JSON.stringify(result));
  });
});

router.post("/like", async (req, res) => {
  const id = req.body.e.idNews;
  const user = req.body.user.id;

  const verify = `SELECT * FROM liked WHERE idUser = ${user} AND idNews = ${id}`;
  connection.query(verify, (err, resultVerify) => {
    if (err) throw err;
    if (resultVerify.length > 0) {
      if (resultVerify[0].isLike === 0) {
        const insert = "UPDATE news SET liked = liked + 1 WHERE idNews = ?";
        const value = [id];
        connection.query(insert, value, (err, resultNews) => {
          if (err) throw err;
          res.send(JSON.stringify(resultNews));
        });
      } else {
        const insert = "UPDATE news SET liked = liked - 1 WHERE idNews = ?";
        const value = [id];
        connection.query(insert, value, (err, resultNews) => {
          if (err) throw err;
          res.send(JSON.stringify(resultNews));
        });
      }
      const liked = resultVerify[0].isLike === 0 ? 1 : 0;
      const update =
        "UPDATE liked SET isLike = ? WHERE idNews = ? AND idUser = ?";
      const value = [liked, id, user];

      connection.query(update, value, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result[0]));
      });
    } else {
      const insert = "UPDATE news SET liked = liked + 1 WHERE idNews = ?";
      const values = [id];
      connection.query(insert, values, (err, resultNews) => {
        if (err) throw err;
        // res.send(JSON.stringify(resultNews));
      });
      const liked =
        "INSERT INTO liked (idNews, idUser, isLike) VALUES(?, ?, 1)";
      const value = [id, user];

      connection.query(liked, value, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
      });
    }
  });
});

// USER
router.get("/myLikes", async (req, res) => {
  const user = req.query.user;

  const sql = `SELECT * FROM liked, news WHERE idUser = ${user} AND news.idNews = liked.idNews ORDER BY id DESC LIMIT 6`;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(result));
  });
});

module.exports = router;
