//* DECLARING FUNCTION - use function keyword, functionName, list of Parameters and function body.
//* FunctionName musst be in camelCase and start with verbs like getData()

//* FUNCTION CALL - use functionName( arguments )
function sum( a, b )
{
    return a + b;
}
let result = sum( 5, 10 );
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
    console.log("Hello World from JavaScript, this anonymous function");
};
myFunction();

//* ANANONYMOUS FUNCTION AS ARGUMENT
setTimeout(function(){
    console.log("Hello World from JavaScript, this is anonymous function as argument");
}, 1000);

//* IMMEDIATE FUNCTION INVOKING
(function(){
    console.log("I am Abass Kuku");
})();

//* ARROW FUNCTIONS - concise syntax for writing function expressions.