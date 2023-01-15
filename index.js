 //You might also want to make your queries asynchronous. MySQL2 exposes a `.promise()` 
// function on Connections to upgrade an existing non-Promise connection to use Promises. 
// To learn more and make your queries asynchronous, refer to the 
// [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).

// add tables department, role, employee
//options: view all departments, 
// view all roles, view all employees, add a department, 
// add a role, add an employee, and update an employee role

const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const consoleTable = require('console.table');

const promptChoices = {
    viewAllEmployees: "View All Employees",
    viewByDepartment: "View All Employees By Department",
    viewByManager: "View All Employees By Manager",
    viewAllRoles: "View All Roles",
    addEmployee: "Add An Employee",
    removeEmployee: "Remove An Employee",
    updateRole: "Update Employee Role",
    updateEmployeeManager: "Update Employee Manager",
    removeDepartment: "Remove Department",
    removeRole: "Remove Role",
    exit: "Exit"

};