// Parameters are placeholders for the real values passed into the function and received by the function to perform certain actions on them.
// $ Note: Arguments are the real values passed into the function at the time of invocation.

// Default parameters:

// Parameters that need a default value in order to operate the function are default parameters these parameters are optional to pass (these values are overridden by the passed arguments passed to the function).

function Greet(adjective, value = "day") {
    console.log(`Have a ${adjective} ${value}.`);
}

// * Note: If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

// It can also be done like this:

// function Greet(adjective, value){
//     if(value === undefined){
//         y = "day";
//     }
//     console.log(`Have a ${adjective} ${value}.`);
// }
// But the first one is preffered as it has shorter syntax.

Greet("great");
Greet("burning", "workout");

// Function Rest/Spread Parameter:
// By using '...' (spread operator) with parameter name we can make it possible to pass infinite number of arguments as an array.

function sum(...args) {
    let s = 0;
    for (let arg of args) s += arg;
    return s;
}

console.log(sum(10, 20, 30, 50, 90, 120));

// We can also use Arguments Object to achieve the same result:

function sum2() {
    let s = 0;
    for (let args of arguments) s += args;
    return s;
}

// A function to find the maximum number:

function findMax(...args) {
    max = -Infinity;
    for (let arg of args) arg > max ? max = arg : max;
    return max;
}

// Can also be done like this:
function findMax2() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}


console.log(sum2(10, 20, 30));
console.log(findMax(10, 20, 15));
// We can also pass an array of numbers with spread operator to find the maximum in it:

console.log(findMax2(...[10,9,11]));



//****** */ Arguments are Passed by Value



//* The parameters, in a function call, are the function's arguments.

//* JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.

//* If a function changes an argument's value, it does not change the parameter's original value.

//* Changes to arguments are not visible (reflected) outside the function.



//****** */ Objects are Passed by Reference


//* In JavaScript, object references are values.

//* Because of this, objects will behave like they are passed by reference:

//* If a function changes an object property, it changes the original value.

//* Changes to object properties are visible (reflected) outside the function.
console.log();
// $Example:
let val = 10;

function updateValue(val) {
    val = 11;
}
updateValue(val);
console.log(val);// Value doesn't change

const object = {
    Name: "Idris",
    Age: 19,
    Address: "Ahmedabad"
}

function updateObj(obj){
    obj.Name = "Bruhh";
    obj.Age = 20;
    obj.Address = "Babra"
}
updateObj(object)
console.log(object);// Object is updated

console.log(this);