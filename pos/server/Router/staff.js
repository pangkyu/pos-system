const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/staff", (req, res) => {
  db.query("select * from staff", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
