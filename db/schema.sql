DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
    id: INT PRIMARY KEY AUTO_INCREMENT,
    dept: VARCHAR(30) NOT NULL,
)

CREATE TABLE role(
    id: INT PRIMARY KEY AUTO_INCREMENT,
    title: VARCHAR(30) NOT NULL,
    salary: DECIMAL (14,2) NOT NULL,
    department_id: INT,
    FOREIGN KEY (department_id) REFERENCES
)

CREATE TABLE employee(
    id: INT PRIMARY KEY AUTO_INCREMENT,
    first_name: VARCHAR(30) NOT NULL,
    last_name: VARCHAR(30) NOT NULL,
    role_id:INT,
    manager_id: INT,
    FOREIGN KEY (role_id) REFERENCES ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

