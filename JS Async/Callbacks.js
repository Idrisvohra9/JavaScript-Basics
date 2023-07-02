// # Callback: A function passed as an argument to another function.

// This technique allows a function to call another function

// A callback function can run after another function has finished

// In JavaScript, functions are executed in the sequence they are called. Not in the sequence they are defined

// To understand callbacks in a fun way lets try this:

// Callbacks: The Delivery Person
// Imagine you have a delivery person who brings you the necessary ingredients. In the world of JavaScript, a callback is like your delivery person. You give them a list of tasks, and they come back to you once each task is completed.

// For example:

// Here we have a getIngredients function that accepts a function as an argument and calls the function by passing the ingredients as a parameter in the function by waiting for 2 seconds
function getIngredients(SuccessCallback) {
    console.log("Getting the ingredients..")
    // In set timeout we also pass a callback function.. that gets called when the set interval is reached
    setTimeout(() => {
        const ingredients = ['dough', 'sauce', 'cheese', 'toppings'];
        SuccessCallback(ingredients);
    }, 2000);
}

// Usage
function SuccessFunction(ingredients) {
    console.log("Got the ingredients: ", ingredients);
}

console.log("Without error callback");

// Calling
getIngredients(SuccessFunction);

// Output: ['dough', 'sauce', 'cheese', 'toppings']

// So, Callbacks are basically a function that is passed to the another function and in that function it is called when necessary


// Another example of usage of callback function is:

function filterArray(iterable, callback) {
    const res = [];
    for (const item of iterable) {
        if (callback(item)) {
            res.push(item);
        }
    }
    return res;
}

// Above is a function that takes an array and a callback function that should contain a condition, based on that the array will get filtered as a result
console.log("Filtered Array: ", filterArray([10, 20, 30, 50, 90, 100, 120], (x) => x <= 100));

// We will use more complex examples with async behavior in the future