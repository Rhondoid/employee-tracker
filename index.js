//You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()`
// function on Connections to upgrade an existing non-Promise connection to use Promises.
// To learn more and make your queries asynchronous, refer to the
// [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

// add tables department, role, employee
//options: view all departments,
// view all roles, view all employees, add a department,
// add a role, add an employee, and update an employee role
//Main index to start app and prompt choices
const { prompt } = require("inquirer");
const db = require("./db");
const consoleTable = require("console.table");

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
          name: "Add An Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Add a Role",
          value: "ADD_ROLE",
        },
        {
          name: "Add a department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Quit ",
          value: "QUIT",
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
        quit();
    }
  });
}

function viewEmployees() {
    db.findAllEmployees().then();
};
function viewDepartments() {
    db.findAllDepartments().then();
};
function viewRoles() {
    db.findAllRoles().then();
};
function addEmployee() {
    db.insertEmployee();
};
function addDepartment() {
    db.insertDepartment();
};
function addRole() {
    db.insertRole();
};
function updateEmployeeRole() {
    db.updateEmployeeRole();
};
function quit() {
  process.exit();
}

module.exports = new DB (connection);