const express = require("express");
const router = express.Router();
const db = require("../database");

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
