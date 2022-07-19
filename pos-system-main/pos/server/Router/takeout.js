const express = require("express");
const router = express.Router();
const db = require("../database");

router.all("/category", (req, res) => {
  db.query(
    "select distinct MENU_CATEGORY from menu;",
    function (err, results, fields) {
      if (err) console.log(err);
      else res.send(results);
    }
  );
});
router.all("/menu", (req, res) => {
  db.query("select MENU_NAME from menu;", function (err, results, fields) {
    if (err) console.log(err);
    else res.send(results);
  });
});

module.exports = router;
