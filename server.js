const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");
const db = require ('./db/connection.js');
// Connect to database
const mysqlConnection = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "password",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

// Query database
db.query("SELECT * FROM employees", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM department", function (err, results) {
  console.log(results);
});

db.query("SELECT * FROM role", function (err, results) {
  console.log(results);
});

db.query("INSERT INTO employees", function (err, results) {
  console.log(results);
});

db.query("UPDATE FROM employees", function (err, results) {
  console.log(results);
});
db.query("REMOVE FROM employees", function (err, results) {
  console.log(results);
});
db.query("REMOVE FROM employees", function (err, results) {
  console.log(results);
});
