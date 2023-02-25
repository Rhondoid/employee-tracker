//Main index to start app and prompt choices
const { prompt: inquirerPrompt, default: inquirer } = require("inquirer");
const db = require("./db");
const consoleTable = require("console.table");

//function to call promptChoices and initiate questions
function init() {
  promptChoices();
}

function promptChoices() {
  inquirerPrompt([
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
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          type: "input",
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          type: "input",
          name: "Add department",
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
      let employees = rows;
      console.table(employees);
    })
    .then(() => init());
}
function viewDepartments() {
  db.viewDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => init());
}
function viewRoles() {
  db.viewRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => init());
}
function addEmployee() {
  inquirerPrompt([
    {
      type: "input",
      message: "What is the employees first name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is the employees last name?",
      name: "lastName",
    },
    {
      type: "input",
      name: "roleId",
      message: "What is the employee's role?",
      validate: function (role_id) {
        var valid = !isNaN(parseInt(role_id));
        return valid || "Please enter a number";
      },
      filter: function (role_id) {
        return parseInt(role_id);
      },
    },
    {
      type: "input",
      name: "managerID",
      message: "Who is the employee's manager?",
      validate: function (manager_id) {
        var valid = !isNaN(parseInt(manager_id));
        return valid || "Please enter a number";
      },
      filter: function (manager_id) {
        return parseInt(manager_id);
      },
    },
  ])
    .then((answers) => {
      return db.addEmployee(
        answers.firstName,
        answers.lastName,
        answers.roleId,
        answers.managerID
      );
    })
    .then(([rows]) => {
      let newEmployee = rows;
      console.table(newEmployee);
    })
    .then(() => init());
}

function addDepartment() {
  inquirerPrompt([
    {
      type: "input",
      message: "What is the department name?",
      name: "departmentName",
    },
  ])
    .then((answers) => {
      const departmentName = answers.departmentName;
      return db.addDepartment(departmentName);
    })
    .then(([rows]) => {
      let newDepartment = rows;
      console.table(newDepartment);
    })
    .then(() => init());
}

function addRole() {
  inquirerPrompt([
    {
      type: "input",
      message: "What is the role title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the role salary?",
      name: "salary",
    },
    {
      type: "input",
      name: "department",
      message: "What is the department?",
      validate: function (department_id) {
        var valid = !isNaN(parseInt(department_id));
        return valid || "Please enter a number";
      },
      filter: function (department_id) {
        return parseInt(department_id);
      },
    },
    
  ])
    .then((answers) => {
      return db.addRole(answers.title, answers.salary, answers.department);
    })
    .then(([rows]) => {
      let newRole = rows;
      console.table(newRole);
    })
    .then(() => init());
}
updateEmployeeRole(employee_id, role_id){
  inquirerPrompt([
    {
      type: "input",
      message: "What is the role?",
      name: "role",
    },
  ]);
}
  .then(result => {
    console.log(`Updated ${result.role} rows`);
  })
  .catch(error => {
    console.error(error);
  });

function exit() {
  this.connection.end(function (err) {
    if (err) {
      console.error("Error closing database connection: " + err.message);
    } else {
      console.log("Database connection closed gracefully.");
    }
    process.exit();
  });
}
init();
