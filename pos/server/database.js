const mariadb = require("mysql");
const database = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "onlyroot",
  database: "pos",
});
database.connect();
module.exports = database;
