//# JavaScript Iterators
// The iterator protocol defines how to produce a sequence of values from an object.

// An object becomes an iterator when it implements a next() method.

// The next() method must return an object with two properties:

// first: value (the next value)
// second: done (true or false)

// value: The value returned by the iterator
// (Can be omitted if done is true)
// done: can be true if the iterator has completed
// false if the iterator has produced a new value

// Hard coded Iterable 

function myIterable() {
    let n = 0;
    return {
        next: function () {
            n += 1;
            return { value: n, done: false };
        }
    }
}

const n = myIterable();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
// The problem with this iterator is that we have to manually iterate over the numbers by calling the next() method each time.

// We can make it iterate with a loop for..of loop
// 1st we created an empty Object
const myIterable2 = {}

//| We assigned a Symbol.iterator key to the iterator function that returns an Object with the next() method that returns an object with value and done key.

//| I would suppose that the next() method gets called directly somehow and has a condition to stop it at a when the done becomes false

// $ Symbol.iterator is a symbol key used to define a custom iterator for the object.
myIterable2[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 1;
            if (n === 10) { done = true; }
            return { value: n, done: done }
        }
    }
}
console.log("With for..of");

for (const num of myIterable2) {
    console.log(num);
}

//// The Symbol.iterator method is called automatically by for..of.

// console.log(myIterable2[Symbol.iterator]);
let iterator = myIterable2[Symbol.iterator]();

console.log("With while");
while (true) {
    const { value, done } = iterator.next();
    if (done) break;
    console.log(value);
}

