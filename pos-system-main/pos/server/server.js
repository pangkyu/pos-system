const express = require("express");
const app = express();
const port = 3001;

//mariaDB connect
const db = require("./database");
//router folder
const takeout = require("./Router/takeout");
app.get("/category", takeout);
app.all("/menu", takeout);
const staff = require("./Router/staff");
app.all("/Staff", staff);

app.listen(port, () => {
  console.log(`connect at http://localhost:${port}`);
});
