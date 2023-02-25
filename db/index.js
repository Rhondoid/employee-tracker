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
addEmployee(first,last,role,manager){
  return this.connection.promise().query(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
    [first,last,role,manager]
  );
};
addDepartment(department){
  return this.connection.promise().query(
    'INSERT INTO department (name) VALUES (?)',
    [department]
  );
};
addRole(title, salary, department){
  return this.connection.promise().query(
    'INSERT INTO role (title, salary, department_id) VALUES (?)',
  [title, salary, department]
  );
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