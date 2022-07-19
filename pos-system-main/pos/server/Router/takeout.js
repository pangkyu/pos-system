const express = require("express");
const router = express.Router();
const db = require("../database");

router.all("/takeout", (req, res) => {
  db.query("select * from menu", function (err, results, fields) {
    if (err) console.log(err);
    else res.send(results);
  });
});

module.exports = router;
