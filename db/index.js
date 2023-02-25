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
addEmployee(){
  return this.connection.promise().query(
    'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
    [employee.first_name, employee.last_name, employee.role_id, employee.manager_id]
  );
};
addDepartment(){
  return this.connection.promise().query(
    'INSERT INTO department (name) VALUES (?)',
    [department.name]
  );
};
addRole(role){
  return this.connection.promise().query(
    'INSERT INTO role (title,salary) VALUES (?)',
  [role.title, role.salary]
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