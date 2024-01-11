"use strict";
var mysql = require("mysql");
var pool = mysql.createConnection({
    host: "localhost",
    user: "heinwaiyanhtet",
    password: "heinwai@2004",
    database: "user-service",
});
connection.connect(function (err) {
    if (err)
        throw err;
    console.log("Successfully connected to the database");
});
var executeQuery = function (sql, values) {
    return new Promise(function (resolve, reject) {
        pool.query(sql, values, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
};
module.exports = executeQuery;
