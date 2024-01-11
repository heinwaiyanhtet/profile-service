const mysql = require("mysql");


const pool = mysql.createConnection({
  host: "localhost",
  user: "heinwaiyanhtet",
  password: "heinwai@2004",
  database: "user-service",
});

pool.connect((err : any) =>
{
  if (err) throw err;
  console.log("Successfully connected to the database");
});


const executeQuery = (sql: any,values: any) => {

  return new Promise((resolve,reject) => {

      pool.query(sql,values,(error: any,results: unknown,fields: any) => {

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

