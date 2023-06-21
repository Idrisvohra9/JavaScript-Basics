// Destructing is used to access particular elements of an Array or an Object as per needed.

// An array:
const arr = ["Idris", "Vohra", "SW4"];
const obj = {
    Name: "Aryan",
    Surname: "Sharma",
    Sem: 4
};

// Old way of destructing:
console.log("Name: " + arr[0]);
console.log(obj.Name);


// ES6 Way of destructuring:
const [Name, , Sem] = arr;
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}


const [add, , , divide] = calculate(4, 7);

console.log("Add: " + add);
console.log("Divide: " + divide);

console.log("Name: ", Name);
console.log("Sem: ", Sem);

Desc(obj);

function Desc({ Name, Sem }) {
    console.log("Name: ", Name);
    console.log("Sem: ", Sem);
}
