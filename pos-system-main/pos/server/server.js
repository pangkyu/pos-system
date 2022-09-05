const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

//mariaDB connect
const db = require("./database");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//router folder
const takeout = require("./Router/takeout");
app.get("/category", takeout);
app.all("/menu", takeout);
app.all("/category/:currentCategory", takeout);
const staff = require("./Router/staff");
app.all("/Staff", staff);
app.delete("/Staff/:name", staff);

app.listen(port, () => {
  console.log(`connect at http://localhost:${port}`);
});
