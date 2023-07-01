//# The Set object is a built-in data structure that allows you to store unique values of any type. It provides an efficient way to manage collections of values and offers various methods for working with the data stored in the set.

// It is much like an array or an object but it stores unique values and has less methods, doesn't support indexing.

//# Creating a Set:

// $ Method 1: By passing an array into the constructor:

const firstSet = new Set([1, 2, 3, 4, 5, 5]);// 5 is repeating

// $ Method 2: By using .add() after initializing an empty set.

const secondSet = new Set();

secondSet.add(10);
secondSet.add(9);
secondSet.add(8);
secondSet.add(8);// Here the value 8 already existed before and we have added it again in the second set
secondSet.add(7);

console.log("first ", firstSet);
//// Output: first  Set(5) { 1, 2, 3, 4, 5 }
// (We can see that Set ignores a value if it already exists)
console.log("second ", secondSet);
//// second  Set(4) { 10, 9, 8, 7 }

console.log();

// Deleting items
console.log("deleting the first item in the first set");
// we can do this by using .delete() method

firstSet.delete(1);
console.log("first ", firstSet);
console.log("Clearing the second set");
secondSet.clear();
console.log("After clearing", secondSet);

// Access a singular item:

// If we want to access a certain item we have to convert the Set to an array

console.log("Accessing item on index:0 in firstSet:", Array.from(firstSet)[0])
console.log()
// Length of a Set:

console.log("The size of a first Set:", firstSet.size);
console.log()

// Checking the existence of an item:
console.log("Checking the existence of an item in a Set")
console.log("Does The first set contains 3?", firstSet.has(3) ? "yes" : "no");
console.log("Does The first set contains 9?", firstSet.has(9) ? "yes" : "no");
console.log()

// .keys(), .values() .entries():
// .keys() and .values() return the same thing the array of values
// It is to make them compatible with objects
// .entries() will return the same a 
console.log(firstSet.entries());
// forEach()

//# Set vs. WeakSet:

// Set: A Set is a collection of unique values of any type. Like Map, Set holds strong references to its values, preventing them from being garbage collected as long as the Set exists.

// WeakSet: WeakSet is specifically designed to store object references. It only allows objects as values, and these object references are held weakly. Similar to WeakMap, if there are no other references to an object stored in a WeakSet, it can be garbage collected even if it is still present in the WeakSet.

const firstWeakSet = new WeakSet([{ name: "Idris" }, { age: 19 }]);
console.log(firstWeakSet);