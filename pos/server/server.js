const express = require("express");
const app = express();
const port = 3001;

//router folder
const test = require("./Router/test");

//mariaDB connect
const db = require("./database");

db.query("select * from staff", function (err, results, fields) {
  if (err) {
    console.log(err);
  } else {
    console.log(results);
  }
  db.end();
});

app.use("/api", test);

app.listen(port, () => {
  console.log(`connect at http://localhost:${port}`);
});
