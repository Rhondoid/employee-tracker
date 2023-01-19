// Main index.js to connect with the DB
const connection = require ('./connection.js');

class DB{
constructor(connection){
  this.connection = connection;
}
findAllEmployees(){
  return this.connection.promise().query('SELECT * FROM employees');
};
viewDepartments(){
  return this.connection.promise().query('SELECT * FROM departments');
};
viewRoles(){
  return this.connection.promise().query('SELECT * FROM roles');
};
addEmployees(){
  return this.connection.promise().query('INSERT INTO employees');
};
addDepartment(){
  return this.connection.promise().query('INSERT INTO department');
};
addRole(){
  return this.connection.promise().query('INSERT INTO role');
};
updateEmployeeRole(){
  return this.connection.promise().query('INSERT INTO role');
};
quit(){
  process.exit();
};
}

// // Query database
// db.query("SELECT * FROM employees", function (err, results) {
//   console.log(results);
// });

// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
// });

// db.query("SELECT * FROM role", function (err, results) {
//   console.log(results);
// });

// db.query("INSERT INTO employees", function (err, results) {
//   console.log(results);
// });

// db.query("UPDATE FROM employees", function (err, results) {
//   console.log(results);
// });

module.exports = new DB (connection);