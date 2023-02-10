USE employees_db;
INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");  


INSERT INTO role
    (title, salary, department_id)
VALUES
    ("Sales Lead", 60000, 1),
    ("Salesperson", 80000, 1),
    ("Marketing", 60000, 1),
    ("Finance", 125000, 3),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 1),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);
    


INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("John","Doe", 1, null),
    ("Mike","Chan", 2, null);
   

    INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Ashley","Rodriguez", 5, 1),
    ("Kevin", "Tupik", 5, 1),
    ("Kunal", "Singh",7, 1),
    ("Malia", "Brown", 4,2),
    ("Sarah", "Lourd",9, 2),
    ("Tom", "Allen", 10, 2);
    