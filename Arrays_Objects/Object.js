// $ Tip: The Iterables in javascript are advised to be declared using const keyword.

// @ The first object is infoObj:
const infoObj = {
  Fname: "Idris",
  Age: 19,
  Country: "India",
  Gender: "Male",
  Sexuality: "Straight",
};
// @ This object is dataTypes it has every datatype in javascript:
const dataTypes = {
  string: "XYZ",
  int: 1,
  float: 3.14,
  bool: true,
  array: [1, 3, 4, 6, 8],
  object: infoObj,
  null: null,
};

// $ Basic Object method operations:

// // Finding Length:

console.log("Lenght of infoObj{}:", Object.keys(infoObj).length);
// imp: For finding the length of an object the Object.keys() method is used because, the length of an object is is undefined as the .length  is a property thefore it searches a property named length and as it is not defined it returns undefined.

console.log(); // This is just for line breaks.

// // Accessing the keys values:
// # 1 way:
console.log("infoObj.Country:", infoObj.Country);
// * The way to use the specific key name as a property...

// # 2 way:
console.log("infoObj['Country']:", infoObj["Country"]);
// * The way to use the specific key name as a String inside the square brackets...
console.log();

// // Accessing the nested Iterables inside of the object:
// # Accessing the first character of a String inside the dataTypes Object:
console.log(
  "The first character of the String in dataTypes{}:",
  dataTypes.string[0]
); // # X

// # Accesing the element in last index of Array property in dataTypes Object:
console.log(
  "The element in last index of Array property in dataTypes{}:",
  dataTypes.array[dataTypes.array.length - 1]
); // # 8

// # Accessing the value of Gender property from infoObj through the dataTypes Object's object property:
console.log(
  "The value of Gender property from infoObj through the dataTypes{} object property:",
  dataTypes.object.Gender
); // # Male

console.log();

// // changing the values:
// * The values can be changed in both the ways the key values are accessed..

// #Example:
infoObj.Country = "United States";
console.log("The Country:", infoObj.Country);
// imp: The way the key values are accessed it can be used to assign a value to a variable like:
let gender = infoObj.Gender;
console.log(gender);

console.log();

// // Adding new properties to object:

// * The properties can be added to the object by following the key:value rule that means if a property does not exist in the object it can be added by assigning a value to the new property.
// | Syntax:
// | Object.newProperty = newValue;

// # In action:
// * Adding a Lname property in infoObj:

infoObj.Lname = "Vohra";
console.log("After adding a Lname property:", infoObj);

console.log();

// // Delete a property from an Object:
// * The delete operator is used to delete a property from an object.
// imp: The delete operator should be used delicately as it only works on deleting a property from an object. And it shouldn't be used on a predefined javascript property as it can crash applications.
console.log("The infoObj{} before:", infoObj);

delete infoObj.Sexuality;

console.log("The infoObj{} after:", infoObj);
console.log();

// // Object properties methods:
// * We can add properties methods that perform certain actions in the object itself.

// * We are adding a function called fullName that returns the Fname and Lname.
infoObj.fullName = () => infoObj.Fname + " " + infoObj.Lname;

// imp: If we were to add a function like this directly in the object literally we can use 'this' keyword instead of using the full name of the object as it refers to the object itself.

console.log("The infoObj{} with fullName():", infoObj);
console.log("The full name is: ", infoObj.fullName());
console.log();

// // Object Constructor Methods:

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

Object.defineProperty(dataTypes, "toString", {
  value: function toString() {
    const valuesArr = Object.values(dataTypes);
    const keysArr = Object.keys(dataTypes);
    const returnObj = {};
    for (let i = 0; i < valuesArr.length; i++) {
      returnObj[keysArr[i]] = String(valuesArr[i]);
    }
    return returnObj;
  },
});

Object.defineProperty(dataTypes, "toInt", {
  value: function toInt() {
    const valuesArr = Object.values(dataTypes);
    const keysArr = Object.keys(dataTypes);
    const returnObj = {};
    for (let i = 0; i < valuesArr.length; i++) {
      returnObj[keysArr[i]] = Number(valuesArr[i]);
    }
    return returnObj;
  },
});

console.log("toString() method:", dataTypes.toString());
console.log("toInt() method:", dataTypes.toInt());
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
