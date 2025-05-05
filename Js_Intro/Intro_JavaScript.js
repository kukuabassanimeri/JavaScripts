//*JAVASCRIPT VARIABLES
//* In JavaScript, we declare variables with let or var keywords. 

//*INITILIZE VARIABLES 
let num = 100;
let name = "Abass Kuku";

//* DECLARE MULTIPLE VARIABLES IN A SINGLE LINE
let num1 = 200, myName = "John Doe", age = 30;

//* CONSOLE.LOG() - use to display messages in browser
let greeting = "Hello World from JavaScript";
console.log(greeting);

//* JAVASCRIPTS OPERATORS
//* LOGICAL OPERATORS - Use to perform logical operations on the boolean expressions. Common ones are NOT !, OR || and AND &&

//* JAVASCRIPT STRING CONCATENATION OPERATORS - Use to join two or more strings together
fName = "Nasra";
lName = "Cici";
let fullName = fName + " " + lName;
console.log(fullName);

//* JAVASCRIPT MISCELLANEOUS OPERATORS

//* Comma operator , - Evaluates multiple operands and returns the last operand
let numbers = (2, 3, 4, 6);
console.log(numbers);

//* TERNARY OPERATOR ?: - Returns value based on the condition
//* SYNTAX - condition  ? expressionTrue : expressionFalse; or let variableName = condition ? expressionFalse : expressionTrue
myAge = 18;
let message;
message = myAge >= 18 ? "You are eligible to party" : "You are not eligible to party";
console.log(message);

//* MuLTIPLE TERNARY OPERATORS
let myScore = 85;
let grade;
grade = myScore >= 90 ? "A" : myScore >= 80 ? "B" : myScore >= 70 ? "C" : myScore >= 60 ? "D" : "F";
console.log(grade);

//* An undefined variable is a variable that has been declared but has not been initialized with a value
let timeupdate;
console.log(timeupdate); //* undefined
//* An undeclared variable is a variable that has not been declared at all. 

//* JAVASCRIPT NUMERIC SEPARATOR -  use _ to create a visual separation between groups of digits
let fee = 100_000_000;

//* user input
alert("Hello World from JavaScript")
let myNames = prompt("Enter your name: ");
console.log(myNames);
confirm("Are you sure you want to delete this?");

//* Nullish Coalescing Operator ?? - accepts two values and returns the second value if the first one is null or undefined - A nullish value is a value that is either null or undefined.
//* syntax - value1 ?? value2
const urName = null ?? "John Doe";
console.log(urName);