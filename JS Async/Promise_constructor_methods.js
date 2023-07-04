//# Methods in a Promise Constuctor:


// # 1. Promise.resolve(value)

// $ The Promise.resolve() method returns a promise that is resolved with a given value. It is useful when you want to create a promise that immediately resolves with a specific value.

const promise1 = Promise.resolve(50);

promise1.then(function (value) {
    console.log("Promise.resolve(50)");
    console.log("Value resolved", value);
    console.log()
})



// #2. Promise.reject(reason)

// $ The Promise.reject() method returns a promise that is rejected with a given reason (typically an error). It is useful when you want to create a promise that immediately rejects with a specific reason.


const rejectPromise = Promise.reject(("The promise could not be resolved."));

rejectPromise.catch(function (reason) {
    console.log("Promise.reject(new Error())");
    console.log("Rejection reason:", reason);
    console.log()
});

//  When the promise is rejected, the catch() method is called, and the error is logged to the console.

// #3. Promise.all(iterable)

//$ The Promise.all() method takes an iterable (such as an array or a string of promises) and returns a promise that resolves when all the promises in the iterable have resolved. If any of the promises reject, the resulting promise is rejected.

// Example:

// We will use the above Promises Object in this example
// Note if we pass a promise that is rejected then all the promises in the iterable will be rejected.

// Hence we will create a new Promise object

// This promise will resolve when 2 seconds are passed.
const promise2 = new Promise(function (resolve) {
    setTimeout(() => {
        resolve("Not a number")
    }, 2000);
});


Promise.all([promise1, promise2]).then(function (values) {
    console.log("Promise.all(iterable)");
    console.log(values);
}).catch(function (reason) {
    console.log(reason);
});

// We use Promise.all() to wait for all the promises to resolve. When all promises are resolved, the then() method is called, and an array containing the resolved values (in the same order as the promises) is logged to the console. If any of the promises reject, the catch() method is called instead.


// # 4.Promise.race(iterable)

// The Promise.race() method takes an iterable of promises and returns a promise that resolves or rejects as soon as any of the promises in the iterable resolves or rejects, whichever happens first.

Promise.race([promise1, promise2])
.then((value) => {
    console.log("Promise.race(iterable)");
    console.log("The value of the promise resolved: ",value);
    console.log();
})
.catch(error => console.log(error));