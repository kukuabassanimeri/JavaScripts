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

//* JAVASCRIPT DO WHILE - executes the statement at least once before evaluating the expression.
//* SYNTAX DO - do { statements } while (expression);
let count = 0;
do
{
    console.log(count);
    count++;
}
while (count < 5);