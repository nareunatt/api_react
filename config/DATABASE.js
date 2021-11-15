const mysql = require("mysql");

const db = mysql.createConnection({
    user: "narunat",
    host: "172.18.64.1",
    password: "12345",
    database: "user",
  });

module.exports = db;