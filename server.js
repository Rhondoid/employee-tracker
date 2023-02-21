//Main index to start app and prompt choices
const { prompt } = require("inquirer");
const db = require("./db");
const consoleTable = require("console.table");

//function to call promptChoices and initiate questions
function init() {
  promptChoices();
}

function promptChoices() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What do you want to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Department",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          type: "input",
          name: "Add An Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          type: "input",
          name: "Add a Role",
          value: "ADD_ROLE",
        },
        {
          type: "input",
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          type: "input",
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Exit ",
          value: "EXIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
      default:
        exit();
    }
  });
}

function viewEmployees() {
  //methods, making a function for .then
  db.viewEmployees()
    .then(([rows]) => {
      let employees = [rows];
      console.table(employees);
    })
    .then(() => init());
}
function viewDepartments() {
  db.viewDepartments()
    .then(([rows]) => {
      let departments = [rows];
      console.table(departments);
    })
    .then(() => init());
}
function viewRoles() {
  db.viewRoles()
    .then(([rows]) => {
      let roles = [rows];
      console.table(roles);
    })
    .then(() => init());
}
function addEmployee() {
  db.addEmployee()
    .then(([rows]) => {
      let newEmployee = [rows];
      console.table(newEmployee);
    })
    .then(() => promptChoices());
}
function addDepartment() {
  db.addDepartment()
    .then(([rows]) => {
      let newDepartment = [rows];
      console.table(newDepartment);
    })
    .then(() => init());
}
function addRole() {
  db.addRole()
    .then(([rows]) => {
      let newRole = [rows];
      console.table(newRole);
    })
    .then(() => init());
}
function updateEmployeeRole() {
  db.updateEmployeeRole()
    .then(([rows]) => {
      let updatedRole = [rows];
      console.table(updatedRole);
    })
    .then(() => init());
}
function quit() {
  this.connection.end(function (err) {
    if (err) {
      console.error("Error closing database connection: " + err.message);
    } else {
      console.log("Database connection closed gracefully.");
    }
    process.exit();
  });
}
