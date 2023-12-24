const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "heinwaiyanhtet",
  password: "heinwai@2004",
  database: "deodar_park",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database");
});

module.exports = connection;
