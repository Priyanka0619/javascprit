/*Task1
function calculateResult(name, department, marks) {
    let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
    let average = total / 5;

    let result;
    let grade;

    if (marks[0] < 40 || marks[1] < 40 || marks[2] < 40 ||
        marks[3] < 40 || marks[4] < 40) {
        result = "Fail";
        grade = "Fail";
    } else {
        result = "Pass";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 75) {
            grade = "B";
        } else if (average >= 60) {
            grade = "C";
        } else if (average >= 50) {
            grade = "D";
        } else {
            grade = "Fail";
        }
    }

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}
calculateResult("Arun", "CSE", [90, 85, 95, 88, 92]);*/

/*Task2.
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee); */

/*Task3

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

let above2000 = products.filter(product => product.price > 2000);
console.log("Above 2000:", above2000);

let electronics = products.filter(product => product.category === "electronics");
console.log("Electronics:", electronics);

let below1000 = products.find(product => product.price < 1000);
console.log("Below 1000:", below1000);

let totalPrice = products.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log("Total Price:", totalPrice);

let expensiveProduct = products.some(product => product.price > 50000);
console.log("Any product above 50000:", expensiveProduct);

let allAbove500 = products.every(product => product.price > 500);
console.log("Every product above 500:", allAbove500);*/

/*Task4
let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 45000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Tester",
        salary: 35000
    },
    {
        id: 105,
        name: "Meena",
        role: "Full Stack Developer",
        salary: 65000
    },
    {
        id: 106,
        name: "Ravi",
        role: "Project Manager",
        salary: 70000
    }
];

/*Task5
let names = employees.map(employee => employee.name);
console.log("Employee Names:", names);

let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);
console.log("Employees above 40000:", highSalaryEmployees);

let employee103 = employees.find(employee => employee.id === 103);
console.log("Employee ID 103:", employee103);

let totalSalary = employees.reduce((total, employee) => {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalSalary);

let highestPaid = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});

console.log("Highest Paid:", highestPaid);

let sortedEmployees = [employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted Employees:", sortedEmployees);

let employeeNames = employees.map(employee => employee.name);
console.log("Names Only:", employeeNames);*/

/*Task6.

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

let above80 = students.filter(student => student.mark > 80);
console.log("Above 80:", above80);

let priya = students.find(student => student.name === "Priya");
console.log("Priya:", priya);

let totalMarks = students.reduce((total, student) => {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / students.length;
console.log("Average Mark:", averageMark);

let failed = students.some(student => student.mark < 40);
console.log("Anyone Failed:", failed);

let everyonePassed = students.every(student => student.mark > 40);
console.log("Everyone above 40:", everyonePassed);

let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);
console.log("Sorted Students:", sortedStudents);

/*Task7
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubled = numbers.map(number => number * 2);
console.log("Doubled:", doubled);

let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let greaterThan15 = numbers.filter(number => number > 15);
console.log("Greater than 15:", greaterThan15);

let firstGreater20 = numbers.find(number => number > 20);
console.log("First greater than 20:", firstGreater20);

let total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Total:", total);

let greater40 = numbers.some(number => number > 40);
console.log("Any greater than 40:", greater40);

let positive = numbers.every(number => number > 0);
console.log("Every number positive:", positive);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Highest to Lowest:", sortedNumbers); */ 

/*Task8.
let sentence = prompt("Enter a sentence:");

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log("Contains JavaScript:", sentence.includes("JavaScript"));

console.log("First Character:", sentence[0]);

console.log("Last Character:", sentence[sentence.length - 1]);

let words = sentence.split(" ");
console.log("Number of Words:", words.length);

console.log("After Replacement:", sentence.replace("JavaScript", "Python"));

console.log("Sentence Array:", words); */

/*Task9.

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


function displayEmployees() {
    console.log("All Employees:");
    console.log(employees);
}


function searchEmployee(name) {
    let employee = employees.find(emp =>
        emp.name.toLowerCase() === name.toLowerCase()
    );

    console.log("Search Result:", employee);
}


function filterDepartment(department) {
    let result = employees.filter(emp =>
        emp.department === department
    );

    console.log("Department:", department);
    console.log(result);
}

function salaryFilter() {
    let result = employees.filter(emp =>
        emp.salary > 50000
    );

    console.log("Employees earning above ₹50000:");
    console.log(result);
}

function totalCompanySalary() {
    let total = employees.reduce((sum, emp) => {
        return sum + emp.salary;
    }, 0);

    console.log("Total Company Salary:", total);
}

function highestSalary() {
    let highest = employees.reduce((highest, emp) => {
        return emp.salary > highest.salary ? emp : highest;
    });

    console.log("Highest Paid Employee:", highest);
}



function experiencedEmployees() {
    let result = employees.filter(emp =>
        emp.experience > 3
    );

    console.log("Employees with more than 3 years:");
    console.log(result);
}


function sortSalary() {

    let lowToHigh = [...employees].sort((a, b) =>
        a.salary - b.salary
    );

    let highToLow = [...employees].sort((a, b) =>
        b.salary - a.salary
    );

    console.log("Low to High:");
    console.log(lowToHigh);

    console.log("High to Low:");
    console.log(highToLow);
}



function displayStatistics() {

    let totalEmployees = employees.length;

    let totalSalary = employees.reduce((sum, emp) => {
        return sum + emp.salary;
    }, 0);

    let highest = employees.reduce((highest, emp) => {
        return emp.salary > highest.salary ? emp : highest;
    });

    let averageSalary = totalSalary / totalEmployees;

    console.log("Employee Statistics");
    console.log("Total Employees:", totalEmployees);
    console.log("Total Salary: " + totalSalary);
    console.log("Highest Salary: " + highest.salary);
    console.log("Average Salary: " + averageSalary.toFixed(2));
}


displayEmployees();

searchEmployee("Priya");

filterDepartment("IT");

salaryFilter();

totalCompanySalary();

highestSalary();

experiencedEmployees();

sortSalary();

displayStatistics(); */