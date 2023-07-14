// # Closures are functions that return a function and share a common variable throughout the parent function

// # It is a great way to use local scoped variables and preserve their state for later use when the function is called.

// # Without using closures we would need to make the variable global in order to perform actions on it and preserve it state.

// # A closure is a function having access to the parent scope, even after the parent function has closed
// Example 1:

function counterIncrement() {
    let counter = 0;
    return function () { counter++; return counter; }
}
// The returned method will become increment
const increment = counterIncrement();
console.log(increment());
console.log(increment());
console.log(increment());

// | Output:
// 1
// 2
// 3

// Example 2:

function createObjectAppender() {
    const obj = {};

    return function (key, value) {
        obj[key] = value;
        return obj;
    }
}
// Get the function returned:
const appender = createObjectAppender();
console.log(appender("greet", "Hello"));
console.log(appender("num", 1));
// |Output:
// { greet: 'Hello' }
// { greet: 'Hello', num: 1 }


// Another example:

function incrementBy(num) {
    return function (num2) {
        return num + num2;
    }
}

const addToTwenty = incrementBy(20);
console.log(addToTwenty(30))

// With shorter syntax:

const incrementByShorter = num => num2 => num +num2;

console.log(incrementByShorter(20)(49));