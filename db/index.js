// DB index.js to connect with the DB
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


module.exports = new DB (connection);