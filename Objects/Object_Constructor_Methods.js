// @ The first object is infoObj:
const infoObj = {
    Fname: "Idris",
    Age: 19,
    Country: "India",
    Gender: "Male",
    Sexuality: "Straight",
};

// // Finding Length:

console.log("Lenght of infoObj{}:", Object.keys(infoObj).length);
// imp: For finding the length of an object the Object.keys() method is used because, the length of an object is is undefined as the .length  is a property thefore it searches a property named length and as it is not defined it returns undefined.

console.log(); // This is just for line breaks.

// // Returns the keys of the object:
const keys = Object.keys(infoObj);
console.log("The keys of infoObj[] are:", keys);
console.log();

// // Returns the values of the object:
const values = Object.values(infoObj);
console.log("The values of infoObj[] are:", values);
console.log();

// // Returns an array of key/values of the enumerable properties of an object:
const entries = Object.entries(infoObj);
console.log("The entries of infoObj[] are:", entries);
console.log();

// // Adding a key/value pair or properties that cannot be seen but is there:
// * The Array property is defineProperty():

// $ It works like this:
Object.defineProperty(dataTypes, "MaritalStatus", { value: "Single" });
console.log("The new property cannot be seen when printed:", dataTypes);
// $ We are making a function that cannot be seen but converts the values in the dataTypes object to string when being printed.

Object.defineProperty(dataTypes, "toStringValues", {
    value: () => {
        const valuesArr = Object.values(dataTypes);
        const keysArr = Object.keys(dataTypes);
        const returnObj = {};
        for (let i = 0; i < valuesArr.length; i++) {
            returnObj[keysArr[i]] = String(valuesArr[i]);
        }
        return returnObj;
    },
});

Object.defineProperty(dataTypes, "toIntValues", {
    value: () => {
        const valuesArr = Object.values(dataTypes);
        const keysArr = Object.keys(dataTypes);
        const returnObj = {};
        for (let i = 0; i < valuesArr.length; i++) {
            returnObj[keysArr[i]] = Number(valuesArr[i]);
        }
        return returnObj;
    },
});

console.log("toStringValues() method:", dataTypes.toStringValues());
console.log("toIntValues() method:", dataTypes.toIntValues());
console.log();

// // Returns a Object from the entries:
const entriesArr = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
];
console.log("entriesArr[]:", entriesArr);
const fromEntries = Object.fromEntries(entriesArr);

console.log("The Object made from the entriesArr[]:", fromEntries);
