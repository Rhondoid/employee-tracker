 //You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` 
// function on Connections to upgrade an existing non-Promise connection to use Promises. 
// To learn more and make your queries asynchronous, refer to the 
// [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

// add tables department, role, employee
//options: view all departments, 
// view all roles, view all employees, add a department, 
// add a role, add an employee, and update an employee role

const inquirer = require ('inquirer');
const db = require ('./connection.js');
const consoleTable = require('console.table');
const mysql = require('mysql2');

const promptChoices = () => {
    inquirer.prompt({
        message: 'What do you want to do',
    Type:'list',
    choices:[
    "View All Employees",
    "View All Employees By Department",
    "View All Employees By Manager",
    "View All Roles",
    "Add An Employee",
    "Add a Role",
    "Add a department",
    "Update Employee Role",
    "Update Employee Manager",
    "Remove An Employee",
    "Remove Department",
    "Remove Role",
    "Exit"
    ]
})
};
// .then(response =>

// );