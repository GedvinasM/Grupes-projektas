const mysql = require("mysql");

const db = mysql.createConnection({
  connectionLimit: 10,
  host: "sql11.freemysqlhosting.net",
  user: "sql11484266",
  password: "sM$QPgrWnjxpP5s",
  database: "sql11484266",
});

module.exports = db;
