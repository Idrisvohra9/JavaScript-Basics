// $ JavaScript is a single threaded language, first created for the purpose of making a website and managing the browser backend processes.

// $ Due to it's single threaded nature, processing multiple heavy processes and requests becomes impossible to do in a short amount of time.

// $ Every process gets queued and waiting for a response can become irritating and hence There are special keywords such as 'async' and 'await' that make the heavy processes faster for the main event loop in the thread.

// ? So what does these keywords do?

// $ They are used to define a function that when called returns a promise. The promise is an initial value that can be resolved or rejected.

// $ There are many ways to handle the promises.

// $ The promises allow multiple functions to run in parallel. This makes the execution faster and creates less load on the event loop.

// $ Any function can be made async and we can await the promise to be resolved.

// $ A async function always returns a promise.


// | A simple async function that returns Greet message:

async function greeting(greet) {
    return greet;
}

console.log(greeting("Hello"));
// Output: Promise { 'Hello' }

// So it returns a promise but not the value we want as the promise is still not resolved.

// Then how do we resolve the promise?

// We can do something like this:
greeting("Hello").then((value) => {
    console.log("With .then()");
    console.log(value);
})

// The JavaScript on run time resolves the promise and calls the callback function on the .then method with the resolved promise (Value)

// or even this:
async function sendGreet() {
    async () => await console.log("With await")();
    console.log(await greeting("Hello"));
}
sendGreet();