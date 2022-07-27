const express = require("express");
const router = express.Router();
const db = require("../database");

router.put("/Staff", (req, res) => {
  const position = req.body.STAFF_POSITION;
  const name = req.body.STAFF_NAME;
  const number = req.body.STAFF_NUM;
  const sqlQuery = `update board set(STAFF_POSITION, STAFF_NUM) where STAFF_NAME = ? `;
  db.query(sqlQuery, [position, name, number], function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});
router.delete("/Staff/:name", (req, res) => {
  const name = req.body.STAFF_NAME;
  console.log(name);
  const sqlQuery = `delete from staff where STAFF_NAME = ?`;

  db.query(sqlQuery, [name], function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

router.get("/Staff", (req, res) => {
  db.query("select * from staff", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

router.post("/Staff", (req, res) => {
  const position = req.body.STAFF_POSITION;
  const name = req.body.STAFF_NAME;
  const sex = req.body.STAFF_SEX;
  const number = req.body.STAFF_NUM;
  const sqlQuery = `insert into staff(STAFF_POSITION,STAFF_NAME,STAFF_SEX,STAFF_NUM) values(?,?,?,?) `;
  db.query(
    sqlQuery,
    [position, name, sex, number],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    }
  );
});

module.exports = router;
