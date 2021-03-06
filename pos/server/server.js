const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(cors());
//mariaDB connect
const db = require("./database");
//router folder
const takeout = require("./Router/takeout");
app.get("/Takeout", takeout);
const staff = require("./Router/staff");
app.all("/Staff", staff);

const mainpage = require("../src/pages/Mainpage");
app.get("/", mainpage);

app.listen(port, () => {
  console.log(`connect at http://localhost:${port}`);
});
