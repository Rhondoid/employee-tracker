const inquirer = require ('inquirer')

const consoleTable = require('console.table');
const db = require



// Query database
db.query('SELECT * FROM employees', function (err, results) {
  console.log(results);
});

db.query('SELECT * FROM department', function (err, results) {
  console.log(results);
});

db.query('SELECT * FROM role', function (err, results) {
  console.log(results);
});

db.query('Insert INTO employees', function (err, results) {
  console.log(results);
});




