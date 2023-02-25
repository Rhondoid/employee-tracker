const connection = require ('./connection.js');

class DB{
constructor(connection){
  this.connection = connection;
}


viewEmployees(){
  return this.connection.promise().query('SELECT * FROM employee');
};
viewDepartments(){
  return this.connection.promise().query('SELECT * FROM department');
};
viewRoles(){
  return this.connection.promise().query('SELECT * FROM role');
};
addEmployees(){
  return this.connection.promise().query('INSERT INTO employee');
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
}
function exit() {
  this.connection.end(function(err) {
    if (err) {
      console.error("Error closing database connection: " + err.message);
    } else {
      console.log("Database connection closed gracefully.");
    }
    process.exit();
  });
}


module.exports = new DB (connection);