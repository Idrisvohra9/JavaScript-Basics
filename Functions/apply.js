// Apply method is the same as the call(), as in they are there to achieve the same thing to make the code re-usable and achieve abstraction.

// To point out the difference in both we will be using the same objects and object constructor of call.js

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

// Applying the fullName method on student 1:
// The same syntax and output when it comes to applying functions with no arguments:
console.log("Apllying the fullName method on student 1")
console.log(methods.fullName.apply(student1))
console.log()
// Output: Idris Vohra
// The parameters of apply method:
/*
@param thisArg — The object to be used as the this object.

@param argArray — A set of arguments to be passed to the function.
*/

// # Apllyng methods to object with arguments:
console.log("Applying calculateGrade method to student2: ");
console.log(methods.calculateGrade.apply(student2, [20, 40]));
// As we can see if we pass the second arguments separately it gives an error
// Hence, in apply method we pass an Array of arguments that are to be passed into the method of an object, rather than passing those arguments separately as we did in call method.


// # One use case example for apply method:

// Finding the largest number in an array

// The first parameter does not matter in this case as the max method takes numbers as arguments
const maxNum = Math.max.apply(null, [20, 40, 90]);

// We can do it like this:
console.log(Math.max(100,200,300));
// Or with spread operator as well
console.log(Math.max(...[100,200,300]));
console.log("Max number from array: ", maxNum);