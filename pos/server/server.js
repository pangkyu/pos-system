const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const mysql = require("mysql");

app.get("/", (req, res) => {
  res.send("hi!");
});

app.listen(port, () => {
  console.log(`connect at http://localhost:${port}`);
});
