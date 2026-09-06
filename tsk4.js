/*for(let i = 1; i <= 10; i++) 
    {
    console.log(i);
} */

/*for(let i = 10; i >= 1; i--) {
    console.log(i);
}*/

/*for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}*/

/*for(let i = 1; i <= 20; i += 2) {
    console.log(i);
}*/

/*var number = prompt("Enter a number:");
for(let i = 1; i <= 10; i++) {
console.log(number + " x " + i + " = " + (number * i));
}*/

/*let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}*/

/*var i = 1;
var sum = 0;
while (i <= 10) {
    sum = sum + i;
    i++;
}
console.log(sum);*/

/*let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);*/

 /*let a = 10;
 do {
    console.log(a);
    a++;
}
 while (a <= 5);*/

 /*var name = "javascript";
 for(var character of name) {
    console.log(character);
}*/

/*var fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(var fruit of fruits) {
    console.log(fruit);
}*/

/*let students = ["Arun", "Priya", "Rahul", "Divya", "Karthik"];
for (let student of students) {
    console.log("Student:" + student);
}*/

/*let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}*/

/*var product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (var key in product) {
    console.log(key, product[key]);
}*/

/*function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();*/

/*function greet(name) {
    console.log("Hello " + name);
}
greet("Naveen");
greet("Arun");
greet("Priya");*/

/*function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}
student("Naveen", 22, "CSE");
student("Priya", 21, "ECE");
student("Arun", 23, "IT");*/

/*function add(a,b) 
{
    return a + b;
}
var result = add(10,20);

console.log(result);*/

/*function salary(amount) {
    return amount;
}
var result = salary(50000);

console.log(result);*/

/*function bonus(salary,bonusAmount)
 {
    return salary + bonusAmount;
}
var total = bonus(50000, 5000);
console.log(total);*/

/*function employee(name, role = "Developer") {
    console.log("Name:",name);
    console.log("Role:",role);
}
employee("Arun");
employee("Priya","Designer");*/

/*function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(10));
console.log(square(4));
console.log(square(7));*/

/*var calculate = function(a,b) {
    return a + b;
};
var result = calculate(10,20);
console.log(result);*/

/*var multiply = (a,b) => {
    return a * b;
};
var result = multiply(10,5);
console.log(result);*/

/*function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);
    console.log(b);
    console.log(c);
}
test();*/

/*var a;
console.log(a);
a = 10;*/

/*console.log(b);
let b = 20;*/

/*console.log(c);
const c = 30;*/

/*(function() {
    console.log("Welcome to JavaScript");
})();*/

/*(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);*/

/*function welcome() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);*/

/*function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
let result = cashback();
for (let value of result) {
    console.log(value);
}*/

/*let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 28,
        department: "IT",
        role: "Senior Developer",
        salary: 50000
    }
];
console.log("EMPLOYEE DETAILS");

for (let employee of employees) {
    console.log(employee);
}*/


/*let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 28,
        department: "IT",
        role: "Senior Developer",
        salary: 50000
    }
];

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, ":", employee[key]);
    }

}*/

/*let employee = {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary:40000
};
function displayEmployee() {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}
displayEmployee();*/

/*let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    }
];
function displayEmployee(employee) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.department);
    console.log(employee.role);
    console.log(employee.salary);
}
displayEmployee(employees[0]);
displayEmployee(employees[1]);*/

/*let employee = {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000
};

function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employee);

console.log("Employee Salary:", salary);*/

/*let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Rahul",
        age: 28,
        department: "IT",
        role: "Senior Developer",
        salary: 50000
    }
];

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name, "has salary >= 40000");
    }

}*/

/*let salary = 40000;

let annualSalary = (salary) => {
    return salary * 12;
};

let result = annualSalary(salary);

console.log("Monthly Salary:", salary);
console.log("Annual Salary:", result);*/

/*function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}*/