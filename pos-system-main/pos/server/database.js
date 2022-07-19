const mariadb = require("mysql");
const database = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "onlyroot",
  database: "pos",
  multipleStatements: true, // 여러 쿼리를 ; 를 기준으로 한번에 보낼 수 있다
});
database.connect();
module.exports = database;
