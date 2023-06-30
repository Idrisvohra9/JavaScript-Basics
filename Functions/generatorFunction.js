// In JavaScript, a generator function is a special type of function that can be paused and resumed during its execution. It allows you to define an iterative algorithm by writing code that can produce a sequence of values over time, rather than executing the entire algorithm in one go.

// Generator functions are defined using the function* syntax. When invoked, they return an iterator object that can be used to control the execution of the generator function. The iterator object has a next() method that can be called to advance the generator's execution and retrieve the next value.

// Here's an example of a simple generator function that yields a sequence of numbers:

function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num;
        num++;
    }
}

const iterator = numberGenerator();

// The yield keyword is used to emit a value from the generator and pause its execution. Each time iterator.next() is called, the generator function resumes execution from where it was paused and returns an object with the value property containing the yielded value.

// console.log(iterator.next().value);  // Output: 1
// console.log(iterator.next().value);  // Output: 2
// console.log(iterator.next().value);  // Output: 3
// and so on...

// Generator functions offer a powerful way to work with sequences and provide a more flexible alternative to traditional iterative structures like loops. They can be used to implement custom iterators, asynchronous control flow, and more.

function* clickCount() {
    let count = 0;
    while(true) {
        console.log(count);
        count++;
        yield count;
        // console.log(count % 2);
        if (count % 2 === 1) {
            console.log("On");
        } else {
            console.log("Off");
        }
    }
}
const clicks = clickCount();
// When the 
console.log(clicks.next().value);
console.log(clicks.next().value);
console.log(clicks.next().value);
console.log(clicks.next().value);
