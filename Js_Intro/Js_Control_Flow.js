//* NESTED IF STATEMENT - if statement inside an other if statement
let age = 16;
let myStatus = "Single";

if (myStatus == "Single")
{
    if (age >= 16)
    {
        console.log("You are a teenager and you are single");
    }
}

//* Never use nested if statements, instead use logical operators
if (myStatus == "Single" && age >= 16)
    {
        console.log("You are a teenager and you are single");
    }

//* We can omit { } in if…else statements when we have a single line of code to execute
let num = 100;
if (num % 2 == 0)
    console.log(num + " is an even number");
else
    console.log(num + " is an odd number");

//* SWITCH STATTEMENT - used to select one of many blocks of code based on a given condition.

//* Use switch statement to get day of the week
let day = 3;
let dayOfWeek;

switch (day)
{
    case 1:
        dayOfWeek = "Sunday";
        break;
    case 2:
        dayOfWeek = "Monday";
        break;
    case 3:
        dayOfWeek = "Tuesday";
        break;
    case 4:
        dayOfWeek = "Wednesday";
        break;
    case 5:
        dayOfWeek = "Thursday";
        break;
    case 6:
        dayOfWeek = "Friday";
        break;
    case 7:
        dayOfWeek = "Saturday";
        break;
    default:
        dayOfWeek = "Invalid day number";
}
console.log("Today is " + dayOfWeek);

//* FOR LOOP - used to iterate over a block of code a certain number of times
//* SYNTAX - for(initializer, condition, iterator){ statements }
for (let i = 1; i <=5; i++){
    console.log(i);
}

//* JAVASCRIPT DO WHILE - executes the statement at least once before evaluating the expression.
//* SYNTAX DO WHILE - do { statements } while (expression / condition);
let count = 0;
do
{
    console.log(count);
    count++;
}
while (count < 5);

//* JAVASCRIPT FOR LOOP WITHOUT INITIALIZER
//* SYNTAX - for (; ; ){ statement }

let j = 1;
for (; j < 10; j += 2){
    console.log(j);
}
//* For in - loops through the properties of an Object
//* SYNTAX - for (key in objects ) { code }
let person = { name: "John", age: 30, city: "New York" };
for (let property in person)
{
    console.log(property + " : " + person[property]);
}
//* Access the value of the property using object[property]

//* for of - loops through values of iterable objects
//* SYNTAX - for (variable of iterable) { code }

let colors = ["red", "green", "blue"];
for (let color of colors)
{
    console.log(color);
}
let language = "JavaScript";
for (let char of language){
    console.log(char);
}

//* For each - calls function for each element
//* SYNTAX - variableName.forEach(function(element, index, array) { });
//* variableName.forEach((element, index, array) => { });
//* element - current item in array

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

//* Using arrow function
let fruits = ["Mango", "Orange", "Banana", "Pineapple"];
fruits.forEach((fruit) => {
    console.log(fruit);
});

//* BREAK STATEMENT - prematurely terminates loops
//* SYNTAX - break[label];

//* BREAK STATEMENT IN FOR LOOP
for (let k = 1; k <= 10; k++){
   console.log(k);
}

//* BREAK STATEMENT IN DO WHILE LOOP
let m = 0;
do {
    m++;
    console.log(m);
    if( m === 3){
        break;
    }
} while(m < 5);

//* CONTINUE STATEMENT - skips the current iteration of the loop and proceeds to the next iteration
//* CONTINUE STATEMENT IN FOR LOOP
for (let a = 0; a < 10; a++){
    if(a % 2 === 0){
        continue;
    }
    console.log(a);
}
