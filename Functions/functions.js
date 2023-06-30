// Function:
// Functions are a block of code that is executed when called and has return types
// A function is used to either return a value or manipulate a exisiting value

// Declaring a Function:


// 1. With function keyword:

function add(n1, n2) {
    return n1 + n2;
}

// 2. Function expression (function stored as a variable)

const multiply = function (n1, n2) { return n1 * n2; };

// There are more ways to declare a function using this technique such as:

// Using arrow symbol
let divide = (n1, n2) => n1 / n2;

//// Notice how the function keyword is absent and that we put semicolon at the end as it is kind of a "variable" declaration.
// Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement.

// imp: These obove two function declarations are also called anonymous functions (a function without name). They are invoked using the variable name


// 3. Using the Function constructor

const subtract = new Function("a", "b", "return a - b");

// Self invoking function:
(
    function () {
        console.log("I invoked myself!");
    }
)();


// A function that returns a number of arguments passed in it:

function returnNumArgs(a, b, c) {
    return arguments.length;// imp: Only works in non anonymous functions
}

// A function that returns it's name:

function returnCallee() {
    return arguments.callee;
}

// Calling functions and output:
console.log("Calling the multiply(20,2) function:", multiply(20, 2));
console.log("Calling the divide(10,20) function:", divide(10, 20));
console.log("Calling the add(20,20) function:", add(20, 20));
console.log("Calling the subtract(40,20) function:", subtract(40, 20));
console.log("Type of function: ", typeof multiply);
console.log("Number of arguments passed: ", returnNumArgs(1, 2));
console.log("The function callee: ", returnCallee());
// The typeof operator in JavaScript returns "function" for functions.

// But, JavaScript functions can best be described as objects.

//$ Output:
//$ I invoked myself!
//$ Calling the multiply(20,2) function: 40
//$ Calling the divide(10,20) function: 0.5
//$ Calling the add(20,20) function: 40
//$ Calling the subtract(40,20) function: 20
//$ Type of function:  function
//$ Number of arguments passed:  2
//$ The function callee:  [Function: returnCallee]