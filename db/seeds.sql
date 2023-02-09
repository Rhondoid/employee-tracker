INSERT INTO department
    (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");  



INSERT INTO role
    (title, salary, department_id)
Values
    ("Manager", 80000, 1),
    ("Sales", 60000, 2),
    ("Marketing", 60000, 3),
    ("Technical", 60000, 4);
    




INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Sandra","Books",3, null),
    ("John","Mitchell",1, null),
    ("Barbara","Strong",2, 1);
    