const mysql = require("mysql");

const pool = mysql.createConnection({
  host: "localhost",
  user: "heinwaiyanhtet",
  password: "heinwai@2004",
  database: "user-service",
});

connection.connect((err) =>
{
  if (err) throw err;
  console.log("Successfully connected to the database");
});


const executeQuery = (sql,values) => {

    return new Promise((resolve,reject) => {

        pool.query(sql,values,(error,results,fields) => {

              if (error) 
              {
                reject(error);
              } 
              else 
              {
                resolve(results);
              }
          })

      })
}

module.exports = executeQuery;

