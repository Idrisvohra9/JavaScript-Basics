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

// Assigning the object to another variable doesn't make it it's copy rather it(new variable) becomes the Object itself and changes done in one will directly reflect in the other
console.log("Object Refrence and Object copying with spread operator.");
console.log("The dataTypes Obj: ", dataTypes);

const refOfDataTypes = dataTypes;

refOfDataTypes.array.pop();

console.log("Changing the new dataTypes Obj by removing the last element in array", refOfDataTypes);

console.log("The original dataTypes Obj: ", dataTypes);
console.log();

// We can prevent that and pass the copy of the original object with the help of spread operator:
const copyDataTypes = { ...dataTypes };
console.log("Copy of data types", copyDataTypes);
copyDataTypes.bool = false;
console.log("Changing the boolean to false", copyDataTypes);
console.log("The original dataTypes Obj: ", dataTypes);
console.log();

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


// // Object Constructors:

// -> Object constructor is a peculiar function that creates a custom object by taking parameters as values



// function Student(fname, lname, age, grade) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.grade = grade;
//   this.fullName = () => this.fname + " " + this.lname;

// }
// Both of these are the same thing but the below constructor is the latest best practice the above seems to be deprecated.

class Student {
  constructor(fname, lname, age, grade) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.grade = grade;
  }
}
// It is considered good practice to name constructor functions with an upper-case first letter.

// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

//$ This constructor function may be converted to a class declaration (ES6).

// We can add more properties if we want to the Object created by the constructor function
// but we cannot add properties to the constructor function after the constructor has been created

// To use a Object constructor we have to use the 'new' keyword and initialize it like a class.
const aryan = new Student("Aryan", "Sharma", 20, 9.30);
// We can do it like so:
aryan.country = "India";
// But not like this:
Student.country = "India"; // This doesn't throw an error, but rather adds a property to the function and not the operatable property

const Idris = new Student("Idris", "Vohra", 19, 9.20)

console.log(aryan);
console.log(Idris);

console.log();

// console.log(aryan.fullName());
// console.log(Idris.fullName());

// # Prototyping:
// Prototyping allows us to add or modify properties to/of the constructor function!

// prototyping is OP in my opinion as we can even change the workings of the default in-built Constructors

// We can
Date.prototype.getTime = () => "Frick";
console.log(new Date().getTime());// Even do this!!
// It's illegal btw leave it to professionals.


// Adding prototype intellect to the Student Object constructor function

Student.prototype.intellect = Infinity;

// So now the Student constructor function is updated globally with the addition of the intellect property. By removing this it gets removed.
console.log(Idris.intellect);
console.log(Student);
Student.prototype.setAge = function (age) {

  this.age = age;
}

Student.prototype.getAge = function () { return this.age };
Student.prototype.getObj = function () { return this }
// Student.prototype.bodyCount = null;

const newStudent = new Student("Aryan", "Sharma", 90, "9");
newStudent.setAge(19)
console.log(newStudent.getAge());
console.log(newStudent.getObj());

//# Change the behavior of spread opertor in an Object:

//$ We can change the functionality/behavior of spread operator with a Symbol.iterator generator function:

//| As we know by default spread operator when used with square brackets around with object like: [...objName] it encloses the object in an array and returns the array

//| We can make the spread operator return an array of something else other that the object

//| Like so:

const person = {
  name: 'Johnny',
  lname: "Depp",
  [Symbol.iterator]: function* () {
    yield "Not";
    yield "Yours";
  }
};

console.log([...person]);
