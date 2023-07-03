//# Promise is a JavaScript Object that a async function returns before resolving to a value.

//| Promise Object Properties:
//| A JavaScript Promise object can be:

//* Pending
//* Fulfilled
//* Rejected

//$ The Promise object supports two properties: state and result.

//$ While a Promise object is "pending" (working), the result is undefined.

//$ When a Promise object is "fulfilled", the result is a value.

//$ When a Promise object is "rejected", the result is an error object.

// imp: You cannot access the Promise properties state and result. You must use a Promise method to handle promises.

// Here is how to use the Promises (Basic Syntax):

//@ myPromise.then(
//@   function(value) { /* code if successful */ },
//@   function(error) { /* code if some error */ }
//@ );

// # Creating promises with setTimeout:

// below is a function that resolves two promises and returns an array:

async function sendWeatherReport() {
    // These are Promise objects that will be resolved when we call the callback function in the .then() or is await-ed:
    // Both resolve, and reject are arguments inside the callback function of the Promise constructor
    const delhiWeather = new Promise((resolve) => {
        setTimeout(() => {
            // resolve is a way of returning a value inside the promise
            resolve("21 deg")
        }, 2000);
    });
    const bangloreWeather = new Promise((resolve) => {
        setTimeout(() => { resolve("27 deg") }, 4000);
    });

    console.log("Fetching delhi weather..");
    // the await keyword actually waits for the promise to resolve
    const delhiReport = await delhiWeather;
    console.log("delhi weather fetched..", delhiReport);

    console.log("Fetching banglore weather..")
    const bangloreReport = await bangloreWeather;
    console.log("banglore weather fetched..", bangloreReport);


    return [delhiReport, bangloreReport];
}

console.log("Welcome to the Weather report service!");
// This will return a pending Promise state as the Promise is not resolved
console.log(sendWeatherReport());// This does not resolve the promise but still goes through the time Out intervals and console logs

console.log("event loop continuing parallel as the promises resolves")
// Properly resolving both of the promises:

sendWeatherReport().then((value) => console.log(value));

// If we want to resolve the promises with async-await rather than the .then() chain, we can do so but when there is an await call it should be inside an async function or else it will throw an error.

// Async await keyword resolving:
// async function logWeatherReport(){
//     console.log(await sendWeatherReport());
// }
// logWeatherReport();
//| The output is really intresting:

// Welcome to the Weather report service!
// Fetching delhi weather..
// Promise { <pending> }
// event loop continuing parallel as the promises resolves
// Fetching delhi weather..
// delhi weather fetched.. 21 deg
// Fetching banglore weather..
// delhi weather fetched.. 21 deg
// Fetching banglore weather..
// banglore weather fetched.. 27 deg
// banglore weather fetched.. 27 deg
// [ '21 deg', '27 deg' ] // At last getting the values

// Now if we want the console.log() statement in the between to not disturb the function flow we can do something like this:
async function log() {
    console.log("Weather report sent");
}

const main = async () => {
    console.log("Welcome to the non disturbed weather report service!");
    // The variable will contain the value and not the Promise
    const weatherArray = await sendWeatherReport();
    console.log("The weather array is: ", weatherArray);
    await log();
    // #Output:
    // Welcome to the non disturbed weather report service!
    // Fetching delhi weather..
    // delhi weather fetched.. 21 deg
    // Fetching banglore weather..
    // delhi weather fetched.. 21 deg
    // Fetching banglore weather..
    // delhi weather fetched.. 21 deg
    // Fetching banglore weather..
    // banglore weather fetched.. 27 deg
    // banglore weather fetched.. 27 deg
    // [ '21 deg', '27 deg' ]
    // banglore weather fetched.. 27 deg
    // The weather array is:  [ '21 deg', '27 deg' ]
    // Weather report sent
}

main();
// So in the easy language a async function runs asynchronously making sure that all the promises are resolved inside the function and if all the promises are resolved than returns a value that can be accessed using .then or await by wrapping the await function call inside a async function and calling it. Till then the execution flow can move outside as well.