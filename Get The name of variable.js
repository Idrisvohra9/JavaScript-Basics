// # This function is an arrow function that takes the variable as a parameter and and creates an object and returns the first key that being the name of the key in the object meaning the name of the variable.

const varName = varObj => Object.keys(varObj)[0];

const n = 42;

const arr= [];

console.log(varName({ arr }));