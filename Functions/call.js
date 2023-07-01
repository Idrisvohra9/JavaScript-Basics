// With the call method you can write a method that can be used on deifferent objects.

// All the functions in JavaScript are methods. As if it is not in an object it is still a part of the JavaScript global object.

// This is an object that holds all the methods but not the properties. We will create an Object and call these methods in it.
const methods = {
    fullName: function () {
        return this.fname + ' ' + this.lname;
    },
    calculateGrade: function (pt, arts) {
        return (this.maths + this.science + this.english + pt + arts) / 5;
    },
    getId: function () {
        return this.id;
    }
}
// We are using Student constructor to create student objects
class Student {
    constructor(id, fname, lname, maths, science, english) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.maths = maths;
        this.science = science;
        this.english = english;
    }

}
const student1 = new Student(1, "Idris", "Vohra", 90, 78, 67);
const student2 = new Student(2, "Aryan", "Sharma", 80, 88, 57);
const student3 = new Student(3, "Jay", "Dave", 30, 70, 63);


console.log("calling the fullName function on student1:");
console.log(methods.fullName.call(student1));
console.log()
// Output: Idris Vohra

console.log("calling the getId function on student2:");
console.log(methods.getId.call(student2));
console.log()
// Parameters in call function
/*
@param thisArg — The object to be used as the current object.

@param argArray — A list of arguments to be passed to the method.
*/
console.log("calling the calculateGrade function on student3 by passing arguments in the call() method:");

// Syntax goes like: call this method on this object with these arguments

console.log(methods.calculateGrade.call(student3, 90, 79));
console.log()

function returnTable(...args) {
    // On the run time when the object is passed on the call method it will be in place of this keyword and the properties will be accessed 
    console.log(this.id + " " + this.fname);
    for (let i = 0; i < args.length; i++) {
        console.log(args[i].id + " " + args[i].fname);
    }
}

// As functions are methods of the global object we can call them on other objects as well by passing the object as the first argument

// In the below function call the first arguemnt is the main object (thisArg) as in, the 'this' keyword in the function will point to the first argument object. And as for the other objects we have used the arguments loop to access the arguments

returnTable.call(student1, student2, student3);

// The changing nature of 'this' keyword
// In the following function if we invoke it it will return the global object as, the value of 'this' in a function points to the global object.

function hello(){
    return this;
}
console.log("Calling hello method");
console.log(hello());
// Output: Global object
// But, if we use methods such as .call(), .apply() or .bind() the object passed as the first argument will make the function's this keyword point to the object itself.

console.log("Calling hello method on student1:")
console.log(hello.call(student1));


// Output: Student {
//   id: 1,
//   fname: 'Idris',
//   lname: 'Vohra',
//   maths: 90,
//   science: 78,
//   english: 67
// }
