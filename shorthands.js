//# Shorthand conditions in JavaScript:

// // Ternary operator
let num1 = 20;
let num2 = 30;
// To check if num1 is greater than num2 we would normally do This:

if (num1 > num2) {
    console.log("num1 is greater than num2");
} else {
    console.log("num1 is less than num2");
}
console.log();
// With ternary operator:
console.log("With ternary operator:");
console.log(num1 > num2 ? "num1 is greater than num2" : "num1 is less than num2");
console.log()

//# In JavaScript, the short circuit operators are logical operators that are used to evaluate expressions and return a result based on the truthiness or falsiness of the values involved. 

//# Short circuit operators are commonly used for conditional assignment, default values, and conditional execution of code blocks. They provide a concise way to handle logical expressions and can help improve code readability and efficiency.

// //Short-circuit evaluation
// # undefined and null are the data types considered nullish in javascript.
// # Whereas falsy data types are these: false, 0, '', null, undefined, or NaN
// # The opposite can be said for truthy data types: true, not 0, "something",  !null, !undefined, !NaN

// By using the || (Logical Or operator) on availability of a variable we can check for 3 conditions at once
// Refer to the below example:
console.log("Short-crcuit OR Operator '||'")
let str = "";
let n = 0;
let arr = [];
let target;
let temp = !0;
console.log(temp);
// We want to assign the target to be equal to the "default-string" value if the str variable contains a value that is not an empty string or null or undefined

// To do this the long way we can use conditions like this:
// We can say that the condition checks for truthy values
if (str !== null && str !== undefined && str !== "") {
    target = str;
} else {
    target = "default-string";
}

// by using the short circuit we can do something like this:

//| If the variable is found to be nullish or empty assign the value to the target else assign target to be "default-string".
console.log("Example 1:")
target = str || "default-string"
console.log(target);

console.log("Example 2:")
target = n || 10;// 10, as 0 is an empty number
console.log(target)

console.log("Example 3:")
target = arr || [20, 30];
console.log(target)
console.log("It doesn't work with arrays")
console.log()

// // Short-crcuit AND Operator '&&'
console.log("Short-crcuit AND Operator '&&'")
// Short circuit behavior: If expr1 is falsy, the && operator does not evaluate expr2 because the overall expression is already false.
console.log("Example 1:")
target = str && true;
console.log(target)

console.log("Example 1:")
target = n && true;
console.log(target)

console.log("Example 2:")
target = temp && false;// In this the expr1 or temp variable has a true value (a value that evaluates to true) and so the false will be assigned to the target variable.
console.log(target)

console.log("Example 3:");
console.log(10 !== 10 && true)// false, as the first expression returns false
console.log()
console.log("Nullish Coalescing Operator '??'");

// Longhand
if (str !== null && str !== undefined) {
    target = "default-string"
} else {
    target = str;
}

//| If the variable has a value other than null or undefined then it stays else it gets changed to the other value

//  and so the nullish Coalescing operator swaps the values if the first value is found to be nullish

// Shorthand:
console.log("Example 1:")
target = str ?? "default-string";// Only gets assigned if not null or undefined
// Output: ''
console.log(target)

console.log("Example 2:")
target = n ?? "default-number";// 0
console.log(target)

console.log("Example 3:")
target = arr ?? [10, 20];// []
console.log(target)

console.log()
console.log("Logical Nullish assignment operator '??='")

target = null;// or undefined

// If the target is nullish assign the value on the right hand side of the assignment operator

target ??= "not Nullish";// not Nullish
console.log(target)
console.log()

//// Object property assignment shorthand
console.log("Object property assignment shorthand:")

// We can use variables inside object to create key and value pairs
// The object gets automatically created with key to be the variable name and value to be the variable value.

// Example:
console.log({ n, arr, num1 })
// { n: 0, arr: [], num1: 20 }
console.log()

console.log("Exponentation:")
console.log("Longhand:")
console.log("Math.pow(10,2):",Math.pow(10,2));
console.log("Shorthand:")
console.log("10**2:", 10**2);

console.log()
console.log("Optional Chaining")
// //Optional Chaining

const obj = {
    x: {
        y: 1,
        z: 2
    },
    others: [
        'test',
        'tested'
    ]
}

// If we want to check if an entry exists or there is an element in the index we use optional chaining method:

// The longhand way to to this:
console.log("Longhand")
if (obj['others'] && obj.others.length >= 2) {
    console.log('2nd value in others: ', obj.others[1])
}

// shorthand
console.log("Shorthand")
console.log(obj.others?.[1])
console.log(obj?.something?.[1])
// console.log(obj.something[1])
// This will throw an error
// console.log(obj.something[1])
//                          ^

// TypeError: Cannot read properties of undefined (reading '1')
console.log()

// Casting values to boolean
console.log("Casting values to boolean")

console.log("Longhand")
console.log("Boolean(null):",Boolean(null))
console.log("Boolean(1):",Boolean(1))
console.log("Boolean([]):",Boolean([]))

console.log("Shorthand")
console.log("!!null", !!null)
console.log("!!1", !!1)
console.log("!![]", !![])

console.log()

console.log("Float number truncation")
console.log("Longhand")
console.log("Math.trunc(3.14):", Math.trunc(3.14))
console.log("Shorthand")
console.log("~~3.14:",~~3.14)
