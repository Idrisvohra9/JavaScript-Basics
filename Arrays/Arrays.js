{
    // # Making an array:

    //*1. Literally or manually:
    let a1 = [1, 2, 3, 4,];

    //*2. array that spans multiple lines:

    let a2 = [
        'A',
        'B', 
        'C', 
        'D'
    ];


    // * 3. making an array than inserting values:

    let a3 = [];

    a3[0]= 1;
    a3[1]= 2;
    a3[2]= 3;
    a3[3]= 4;

    // * 4. making an array with new keyword:

    let a4 = new Array(5,6,7,8);

    // imp There is no difference between the ways to make an array the second just looks beautiful, But for readability and simplicity the literal method is used.

    // // An array elements can be accessed by the index of the array.

    console.log(a1[0]); // # 1

    // // The array elements can also be changed using the index:

    a1[1]= "two";

    console.log(a1[1]); // # two

    // // The full array can be printed this way:

    console.log(a2); // # [ 'A', 'B', 'C', 'D' ]

    // // Javascript Object:

    // #The objects are kind of the same as the arrays but it has members to access the data in the object, and are enclosed in the curly brackets:

    let infoObj = {
        Name:"Idris",
        lName: "Vohra",
        Age: 19
    };

    console.log(infoObj.Name); // #Idris

    // # Array elements can be objects and array can have any data types, objects and even an array can have different arrays as well.

    let myArray = [];
    myArray[0] = Date.now();
    myArray[1] = infoObj;
    myArray[2] = a2;

    console.log(myArray);
    // # Output:
    [
        1655544941498,
        { Name: 'Idris', lName: 'Vohra', Age: 19 },
        [ 'A', 'B', 'C', 'D' ]
    ]

    // For inserting a line break in the console.
    console.log();

    // * Looping through an array:

    // for loop:
    for(i=0;i<a1.length;i++) {
        console.log(a1[i]);
    }

    console.log();

    // | for each:
    a1.forEach(k => {
        console.log(k);
    });

    // * Adding an element in the array:

    // # push():
    a1.push("Something");
    // It will add it to the last index/place

    // # Array.length method:

    a1[a1.length] = "Other thing";

    console.log(a1);// #[ 1, 'two', 3, 4, 'Something', 'Other thing' ]

    // imp: adding elements in an array at high indexes can create undefined holes in arrays!.

    // | Example:

    a1[9] ="xyz";

    console.log(a1);// # [ 1, 'two', 3, 4, 'Something', 'Other thing', <3 empty items>, 'xyz' ]

    console.log();
    // Associative Arrays
    // Many programming languages support arrays with named indexes.

    // Arrays with named indexes are called associative arrays (or hashes).

    // JavaScript does not support arrays with named indexes.

    // In JavaScript, arrays always use numbered indexes.

    //| const person = [];
    //| person["firstName"] = "John";
    //| person["lastName"] = "Doe";
    //| person["age"] = 46;
    //| person.length;     // Will return 0
    //| person[0];         // Will return undefined

    //// The Difference Between Arrays and Objects

    //| In JavaScript, arrays use numbered indexes.  
    //| In JavaScript, objects use named indexes.


    // // When to Use Arrays. When to use Objects.
    //| JavaScript does not support associative arrays.
    //| You should use objects when you want the element names to be strings (text).
    //| You should use arrays when you want the element names to be numbers.

    // imp: We should avoid using the new Array() method as it gives some unexpected results.
    // // How to recognize an array:

    // * the javascript typeof operator returns the array as an 'object'.
    // * Because it is an object.

    // * But there are other solutions that return the array type as an 'array'.

    // # Solution 1 Array.isArray() Method:

    console.log(Array.isArray(a2));// # true

    // # Solution 2 instanceof operator:

    //* The instanceof operator returns true if an object is created by a given constructor

    console.log(a2 instanceof Array);// # true

    // # The use of 'const' keyword while declaring an array:

    // * It is a common practice to declare an array with the const keyword.

    // $ The array should be initialized in the same line as the const keyword:

    const arr = [1, 2, 3, 4];

    //| const arr2;// This gives an error as the constant variable should be asigned to a value while declaring.
    //| arr2= [299,929]

    // imp: if we use the const keyword while declaring an array the variable that stores the array should not be reassigned. But the elements inside of the array can be manipulated, removed and changed.

    // # See:
    // arr =""; //# TypeError: Assignment to constant variable

    arr[0] = 5;
    arr.pop();
    arr.push(10);

    console.log(arr);
    // # Output: [ 5, 2, 3, 10 ]
}