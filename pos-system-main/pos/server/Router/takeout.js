const express = require("express");
const router = express.Router();
const db = require("../database");

router.all("/category", (req, res) => {
  db.query(
    "select distinct MENU_CATEGORY from menu;",
    function (err, results, fields) {
      if (err) console.log(err);
      else {
        res.send(results);
      }
    }
  );
});
router.all("/category/:currentCategory", (req, res) => {
  const sqlQuery = `select MENU_NAME, MENU_PRICE from menu where MENU_CATEGORY = ?`;
  const category = decodeURIComponent(req.params.currentCategory);
  db.query(sqlQuery, [category], function (err, results, fields) {
    if (err) console.log(err);
    else {
      console.log(results);
      res.send(results);
    }
  });
});
module.exports = router;
