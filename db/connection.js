// Import and require mysql2
const mysql = require("mysql2");


// Connect to database
const mysqlConnection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

module.exports = mysqlConnection;
