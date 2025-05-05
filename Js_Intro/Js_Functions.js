//* DECLARING FUNCTION - use function keyword, functionName, list of Parameters and function body.
//* FunctionName must be in camelCase and start with verbs like getData()

//* FUNCTION CALL - use functionName( arguments )
function sum( a, b )
{
    return a + b;
}
let result = sum( 5, 10 ); //* function call
console.log( result );

//* JAVASCRIPT HOISTING - Using function or a variable before declaration.
//* VARIABLE HOISTING - varies depending on whether a variable is declared using var, let, or const
//* A variable is hoisted only to the top of its current scope & not to the global scope.

//console.log( myName ); //* undefined
var myNam;

//console.log( myName );
let myName; //* ReferenceError

//* FUNCTION HOISTING - Call function before declaration
greetings(); //* Function called before declaration

function greetings(){
    console.log("Hello World from JavaScript");
}

//* Initializations are not hoisted

//* ANONYMOUS FUNCTION - A function without a name
(function () {});
//* An anonymous function is not accessible at its initial creation. You need to assign it a variable

let myFunction = function() {
    console.log("Hello World from JavaScript, this is anonymous function");
};
myFunction();

//* An other way to declare anonymous function
const car = {
    name: "Tesla",
    startEngine: function(){
        console.log(this.name + " is starting the engine");
    }
}
car.startEngine();

//* ANANONYMOUS FUNCTION AS ARGUMENT
setTimeout(function(){
    console.log("Hello World from JavaScript, this is anonymous function as argument");
}, 1000);

//* IMMEDIATE FUNCTION INVOKING
(function(){
    console.log("I am Abass Kuku");
})();

//* ARROW FUNCTIONS - concise syntax for writing function expressions.
//* SYNTAX - let functionName = (arg1, arg2, ... argN) => { stattements }

//* Arrow function with single expression / statement
let arrowFunction = (arg1, arg2, ... argN) => expression;

//* Arrow function with no arguments
let arrowFunctionNoArgs = () => "Arrow function with no arguments"; //* use empty parentheses
console.log(arrowFunctionNoArgs());

//* Arrow function with single argument
let arrowFunctionSingleArg = num => num * num; //* use single argument without parentheses
console.log(arrowFunctionSingleArg(10));

//* this keyword with arrow function - refers to the function where it is called in regular function
//* But it is not associated with arrow function, rather object that defines arrow function
const myCar = {
    brand: "Toyota",
    showBrand: function() { //* Anonymous function
        console.log(this.brand); //* Refers to car object

        const arrowFunc = () => { //* Arrow function
            console.log(this.brand); //* Refers to car object still
        };
        arrowFunc();
    }
};
myCar.showBrand();

//* JavaScript pass by value - changes made to the arguments are not reflected outside of the function.
function square(x){
    sqr = x * x;
    return sqr;
}
let num = 4;
console.log(square(num));

//* Recursive function - function that calls itself inside its body
//* Program to count down till 1
function countDown(count){
    console.log(count);
    if(count > 1){ //* base case
        count = count - 1;
        countDown(count);
    }else{
        return;
    };
};
countDown(10);

//* Program to find factorial of a number
function factorial(num){
    if(num > 1){
        return num * factorial(num - 1);
    }else{
        return 1;
    };
};
let n1 = 5;
let n2 = factorial(n1);
console.log(`The factorial of ${n1} is ${n2}`);

//* Default parameters - used when the function is called without passing the corresponding arguments
function sum(x = 3, y = 5) {
    return x + y;
}

//* pass arguments to x and y
var result1 = sum(5, 15);
console.log(`Sum of 5 and 15 is: ${result}`);

//* pass argument to x but not to y
result = sum(7);
console.log(`Sum of 7 and default value (5) is: ${result}`);

//* pass no arguments
//* use default values for x and y
result = sum();
console.log(`Sum of default values (3 and 5) is: ${result}`);