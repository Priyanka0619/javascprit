/*Q1.
var -It can be redeclared and reassigned
let -It can be reassigned but not redeclared
const -It cannot be reassigned or redeclared
var a = 10;
let b = 20;
const c = 30;
a = 15; 
b = 25; 
c = 35; //Error*/

/*Q2.
var x = 10;
var x = 20; //Allowed

let y = 10;
let y = 20; //Error

const z = 10;
const z = 20; //Error */

/*Q3.
var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;
z = 30;
console.log(x,y,x);
*/

/*Q4.
Declaration-means creating a variable
Initialization-means giving the variable its value
let age = 20;*/

/*Q5.
let a;
console.log(a);//undefined*/

/*Q6.
Hoisting-moves declarations to the top of their scope during execution preparation
console.log(x);
var x = 10;//undefined */

/*Q7.
undefined-a variable has been declared but no value has been assigned
null-no value

let a;
console.log(a); // undefined
let b = null;//empty */

/*Q8.
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});*/

/*Q9.
== - Compares values after type conversion
5 == "5" // true

=== - Compares both value and datatype
5 === "5" // false*/

/*Q10.
++i=Pre-increament
increases the value then uses it.
let i = 5;
console.log(++i);

i++=Post-increament
uses the value,then increases it.
let i = 5;
console.log(i++);*/

/*Q11.
let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);*/

/*Q12.
&& AND -Both conditions must be true
console.log(5>3 && 10>5);

|| OR -At least one condition must be true
console.log(5>10 || 10>5);

! NOT -Reverses the result
console.log(!(5 > 3));*/

/*Q13.
console.log(5>3 && 10>5);
console.log(5>10 || 10>5);
console.log(!(5>3));*/

/*Q14.
Ternary operator is a short way to write if-else.

let age = 20;
let result = age>= 18 ? "Adult" : "Minor";
console.log(result);*/

/*Q15.
Implicit casting - JavaScript automatically converts the type.
Explicit casting - manually convert the type*/

/*Q16.
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));*//

/*Q17.
NaN -means Not a Number
It occurs when JavaScript tries to perform an invalid numeric conversion or calculation.*/

/*Q18.
if-else - useful for conditions and ranges

if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

switch - useful when checking one value against multiple fixed cases

let day = 2;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}


/*Q20.
An if statement inside another if statement is called nested if.
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}*/

/*Q21.
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); */

/*Q22.
while -checks the condition before executing
let i = 5;
while(i < 5) {
    console.log(i); 
}   //false

do-while -executes at least once before checking
let i = 5;
do {
    console.log(i);
} while(i < 5);
 //5   */

 /*Q23.
 for(let i = 1; i <= 5; i++) {
    console.log(i);
} */

/*Q24.
for-of - gives values

let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    console.log(fruit);
}

for-in - gives indexes or keys

let fruits = ["Apple", "Banana", "Mango"];
for(let index in fruits) {
    console.log(index);
}
*/

/*Q25.
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);

/*Q26.
slice() - not change the original array and it used to extract a portion

let arr = [1, 2, 3, 4];
let result = arr.slice(1, 3);
console.log(result);
console.log(arr);

splice() -Changes the original array.It can add or remove elements

let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); */

/*Q27.
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr); */

/*Q28.
Function Declaration

function greet() {
    console.log("Hello");
}
greet();

Function Expression

let greet = function() {
    console.log("Hello");
};
greet(); */

/*Q29.
Arrow function -shorter way to write a function

const add = (a, b) =>
     {
    return a + b;
};
*/

/*Q30.
function greet() 
{
    return "Hello";
}
let message = greet();
console.log(message);*/

