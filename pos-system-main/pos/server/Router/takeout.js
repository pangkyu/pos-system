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
router.all("/menu", (req, res) => {
  db.query("select MENU_NAME from menu;", function (err, results, fields) {
    if (err) console.log(err);
    else res.send(results);
  });
  // const sql = 'select MENU_NAME from menu where values(?)'; 카테고리 클릭 이벤트 리스너 입력받아서 values 값으로 전달
});

module.exports = router;
