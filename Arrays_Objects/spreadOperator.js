//* The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

//* We can make an array that concats other two array easily.. as a result of joining them like:

const arr1 = [1, 2, 3]
const arr2 = [4,5,6]
const combinedArr = [...arr1, ...arr2]

console.log(combinedArr);
// #Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1.concat(arr2)); // | It produces the same output.

// Assign the first and second items to variables and the rest as an array:

const [one, two, ...rest] = combinedArr;

console.log(one);
console.log(two);
console.log(rest);
// # Output:
// # 1
// # 2
// # [ 3, 4, 5, 6 ]

// $ Using the spread operator on Objects also returns an object combined with multiple objects:

const obj1 = {
    Title1:"This is from Obj1",
    Data1: "Combine it with obj2"
};

const obj2 = {
    Title2:"This is from Obj2",
    Data2: "Combine it with obj1"
};

const combinedObj = {...obj1, ...obj2};
console.log(combinedObj);

// #Output: 
// #{
// #  Title1: 'This is from Obj1',
// #  Data1: 'Combine it with obj2',
// #  Title2: 'This is from Obj2',
// #  Data2: 'Combine it with obj1'
// #}

// | If the key names in both the objects are same, then the obj2's keys will overwrite the obj1's keys and values.

const vehicle = {
    type:"Car",
    fuel: "Battery",
    color:"Red",
    brand:"Buggati"
}
// imp: A rest element must be last in a destructuring pattern.

function giveKeys({type, fuel, brand,...rest}){
    console.log(type);
    console.log(fuel);
    console.log(brand);
    console.log(rest);
}

console.log(giveKeys(vehicle));