{
  const fruits = ["Apple", "Banana", "Orange", "Strawberry", "Pineapple"];

  // # for finding the length of an array the length property is used:

  console.log(".Length:", fruits.length); // # 5

  console.log(); // *For line break in the console.
  // # Convering the array to a string:

  console.log(".toString():", fruits.toString()); // # Apple,Banana,Orange,Strawberry,Pineapple

  console.log();
  // # Converting an array to string but we can specify the separator (.join())

  console.log(".join(' * '):", fruits.join(" * ")); // # Apple * Banana * Orange * Strawberry * Pineapple

  console.log();
  // # Inserting an element(push) and removing an element(pop) from the last position methods:

  fruits.push("Guava"); // * Appends new elements to the end of an array, and returns the new length of the array.

  console.log(".push('Guava')", fruits); // # [ 'Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple', 'Guava' ]

  fruits.pop(); // *Removes the last element from an array and returns it.
  console.log(".pop():", fruits); // #[ 'Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple' ]

  console.log();
  // #Inserting an element(unshift) and removing an element(shift) from the first index/Position methods:

  fruits.unshift("Peach"); // *Inserts new elements at the start of an array.

  console.log(".unshift('Peach'):", fruits); // #[ 'Peach', 'Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple' ]

  fruits.shift(); // *Removes the first element from an array and returns it.

  console.log(".shift():", fruits); // #[ 'Apple', 'Banana', 'Orange', 'Strawberry', 'Pineapple' ]

  console.log();

  // # Concat arrays:
  const boys = ["Idris", "Abu", "Afu"];
  const girls = ["Parine", "Nishrine", "Farnaz"];

  const childrens = boys.concat(girls);

  console.log("The concated array:", childrens); // #[ 'Idris', 'Abu', 'Afu', 'Parine', 'Nishrine', 'Farnaz' ]

  //* The concat() method can take any number of array arguments:
  // | Means that we can create a new array that has any number of arrays concat.

  // *The concat() method can also take strings as arguments:

  const new_childrens = childrens.concat("Farida");

  console.log(".concat('Farida'):", new_childrens);
  // # Output:
  ["Idris", "Abu", "Afu", "Parine", "Nishrine", "Farnaz", "Farida"];

  console.log();

  // // Splicing and Slicing array:

  // * .splice() method is used to add new elements to the array.
  // * .slice() method is used to make a new array from the sliced elements of an array.

  // # Syntax of splice:
  // | arr_name.splice(position_in_array(index),num_elements_to_remove,n*Elements_to_add)
  console.log("***********splice():");
  // #In action:

  // *Adding two elements in fruits array at 2 index:

  fruits.splice(2, 0, "Blueberry", "Mango");

  console.log(".splice(2,0,'Blueberry','Mango'):", fruits);
  // # Output:
  [
    "Apple",
    "Banana",
    "Blueberry",
    "Mango",
    "Orange",
    "Strawberry",
    "Pineapple",
  ];

  console.log();
  // # Adding two elements in fruit array at last position:

  fruits.splice(fruits.length, 0, "Dragon Fuit", "Kiwi");

  console.log(".splice(fruits.length,0,'Dragon Fuit','Kiwi')", fruits);
  // # Output:
  [
    "Apple",
    "Banana",
    "Blueberry",
    "Mango",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Dragon Fuit",
    "Kiwi",
  ];

  console.log();

  // # Deleting Items using splice() method:

  // The splice() method returns an array with the deleted items if we do something like this:

  console.log("The removed element: ", fruits.splice(fruits.length - 1, 1));
  // #The removed element:  [ 'Kiwi' ]

  fruits.splice(fruits.length - 1, 1); // this will remove the last element from the fruit array.
  
  console.log("The new fruit array: ", fruits);
  // # Output:
  // The new fruit array:
  [
    "Apple",
    "Banana",
    "Blueberry",
    "Mango",
    "Orange",
    "Strawberry",
    "Pineapple",
    "Dragon Fuit",
  ];

  // imp: With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array.
  console.log();

  // Like:

  // We are removing first two elements from the array:
  fruits.splice(0, 2);

  console.log(".splice(0,2):", fruits); // #[ 'Blueberry', 'Mango', 'Orange', 'Strawberry', 'Pineapple' ]

  // imp: In the splice method the last parameter is optional that adds elements to the array. The first two are compulsory 1. the position in the array, 2. elements to be removed.
  console.log();

  // // slice() method:
  // * makes a new array with the elements that has been sliced from an array.
  // |The slice() method can take two arguments like slice(1, 3).

  // |The method then selects elements from the start argument, and up to (but not including) the end argument.
  console.log("**********slice():");

  const citrus = fruits.slice(2, 3);

  console.log(".slice(2,3):", citrus); // #[ 'Orange' ]

  // #If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
  console.log();

  // // JavaScript Array map():

  // *The map() method creates a new array by performing a function on each array element.

  // *The map() method does not execute the function for array elements without values.

  // *The map() method does not change the original array.

  // * The map() method accepts a function that has upto three arguments or parameters.

  // # Making a doubler function that doubles the values of each of the elements(if it is a number) in the array (As we only need the elements as a parameter we are only putting it as a parameter).
  console.log("***********map():");
  // |Number array:
  const numArray = [3, 4, 5, 6, 8, 9, 2, 3];

  console.log("numArray[]:", numArray);
  // # [ 'Blueberry', 'Mango', 'Orange', 'Strawberry', 'Pineapple' ]
  let doubler = (element) => element * 2; // *The arrow function is used to make a short function.

  // |New array that will store the Number array after the map(doubler) method.
  const newArray = numArray.map(doubler);

  console.log("numArray.map(doubler):", newArray);

  console.log();
  // # The upperCaser() Method is for the array of strings it converts each element to uppercase.
  let upperCaser = (ele) => ele.toUpperCase();

  // imp: We are using the fruits array.
  console.log("fruits[]:", fruits);

  // |New array that will store the fruits array after the map(upperCaser) method.
  const newArray2 = fruits.map(upperCaser);

  console.log("fruits.map(upperCaser):", newArray2);
  // # [ 'BLUEBERRY', 'MANGO', 'ORANGE', 'STRAWBERRY', 'PINEAPPLE' ]
  console.log();

  // // JavaScript Array filter():

  // * The filter() method creates a new array with array elements that passes a test.

  // * In filter() method same as map() method a function is passed to be worked on the elements of an array.And it also does not change the original array.

  // *The filter() method takes function that accepts up to three arguments.
  console.log("**********filter():");

  // # This example creates a new array from elements with a value larger than 5 (As we only need the elements as a parameter we are only putting it as a parameter):

  // imp: We are using the numArray from above.
  console.log("numArray", numArray);
  let moreThanFive = (element) => element > 5;

  const newArray3 = numArray.filter(moreThanFive);
  console.log("numArray.filter(moreThanFive):", newArray3);
  // # [ 6 ]

  // # This example only accepts the Elements that are integers and creates a new array:

  // |The array we are using:
  const mixedArray = ["Abc", "DEF", true, null, 2, 4, 5, 50.6];
  console.log("mixedArray", mixedArray);
  // The function:
  let selectNumElems = (element) => Number.isInteger(element);

  const newArray4 = mixedArray.filter(selectNumElems);
  console.log("mixedArray.filter(selectNumElems):", newArray4);

  console.log();

  // // JavaScript Array reduce(), reduceRight():

  // *The reduce() method runs a function on each array element to produce (reduce it to) a single value.

  // *The reduce() method works from left-to-right in the array. See also reduceRight().

  // *The reduce() method does not reduce the original array.

  // *Note that the function takes 4 arguments: The total (the initial value / previously returned value), The item value, The item index, The array itself

  console.log("*************reduce():");
  // # The example of reduce() method:
  // |1. Sum function reduce():
  // We will be using the numArray from the above example...

  console.log("numArray:", numArray);

  let sumElements = (total, element) => total + element;

  let sum = numArray.reduce(sumElements);

  console.log("numArray.reduce(sumElements):", sum);

  // $We can add an optional value that will be treated as the total and be added to the result like this:
  sum = numArray.reduce(sumElements, 100);

  console.log("numArray.reduce(sumElements,100):", sum);

  // |2. Multiply function reduce():

  let mulElements = (total, element) => total * element;

  let mul = numArray.reduce(mulElements);

  console.log("numArray.reduce(mulElements):", mul);

  // * Doing the same thing in a different method of reduce that is reduceRight():
  // | The flow of the elements in the reduceRight() is from right to left.

  mul = numArray.reduceRight(mulElements);

  console.log("numArray.reduceRight(mulElements)", mul);

  console.log();

  // // JavaScript Array every(), some():
  // * every(), some() method checks for a functional condition and returns a boolean value.

  // * every() returns true if the condition is satisfied for every element in the array and false if any of the elements does not satisfy the condition.

  // * some() returns true if some element satisfies the condition and false if none of the elements satisfy the condition.

  // * Both of the methods takes the function with upto three arguments The item value, The item index, The array itself.

  console.log("*********every():");

  // # Example for every():
  // $ check if the values of all the elements in the numArray are over 5:

  // #Function:
  let checkOver5 = (element) => element > 5;

  let allOver5 = numArray.every(checkOver5);
  console.log("All of the elements in the numArray are over 5:", allOver5);

  console.log("*********some():");

  // # Example for every():
  // $ check if the values of some the elements in the numArray are over 5:

  let someOver5 = numArray.some(checkOver5);
  console.log("Some of the elements in the numArray are over 5:", someOver5);
  console.log();
  // // JavaScript Array indexOf(), lastIndexOf():

  // *The indexOf() method searches an array for an element value and returns its position.

  // |array.indexOf(item, start)

  // *item Required. The item to search for.

  // *start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

  // * Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

  // #Examples:

  // * We are using the fruits array for this:
  console.log("**********indexOf():");
  console.log("fruits[]:", fruits);

  console.log("The index of 'Orange' in fruits[]: ", fruits.indexOf("Orange"));
  console.log("**********lastIndexOf():");
  console.log(
    "The last index of 'Orange' in fruits[]: ",
    fruits.lastIndexOf("Orange")
  );

  console.log();

  // // JavaScript Array find(), findIndex():

  // *The find() method returns the value of the first array element that passes a conditional function.

  // *The findIndex() method returns the index of the first array element that passes a test function.

  // *Note that both the methods take a method upto 3 parameters: The item value, The item index, The array itself

  // # Examples:
  // # find():
  console.log("**************find():");
  // $ We will be using the mixedArray..
  console.log("mixedArray[]:", mixedArray);
  // $The function that finds boolean value:
  let findBool = (element) => typeof element == "boolean";

  let isBool = mixedArray.find(findBool);

  console.log("mixedArray.find(findBool):", isBool); // first element that satisfies the condition.

  // # findIndex():
  // $ findIndex() method returns the index of the first element that satisfies the condition.
  console.log("***************findIndex():");
  isBool = mixedArray.findIndex(findBool);

  console.log("mixedArray.findIndex(findBool):", isBool); // index of first element that satisfies the condition.

  console.log();

  // // JavaScript Array.from():
  // *The Array.from() method Creates an array from an iterable object..
  console.log("*************Array.from():");

  let string = "Hello, world!";
  console.log("String:", string);

  let madeArray = Array.from(string);
  console.log("The Array made from the string:", madeArray);

  console.log();
  // // JavaScript Array keys():
  // *The Array.keys() method returns an Array Iterator object with the keys of an array(indexes).
  console.log("***************keys():");
  // # We are using the mixedArray for this example from the above.

  console.log("mixedArray[]:", mixedArray);
  const keysArr = Array.from(mixedArray.keys());
  // | Note: we are using the Array.from() method to convert the Object [Array Iterator] {} to array.

  console.log("The keys of mixedArray:", keysArr);
  console.log();

  // // JavaScript Array entries():

  // *The entries() method returns an Array Iterator object with key/value pairs:
  console.log("***************entries():");

  // # We are using the mixedArray for this example from the above.
  console.log("mixedArray[]:", mixedArray);

  const entriesArr = Array.from(mixedArray.entries());

  console.log("entriesArr[]:", entriesArr);

  console.log();

  // //JavaScript Array includes():

  // *This allows us to check if an element is present in an array (including NaN, unlike indexOf) By returning a boolean value.

  console.log("***********includes():");

  // # We are using the mixedArray for this example from the above.

  console.log("mixedArray[]:", mixedArray);

  console.log("mixedArray.includes(null):", mixedArray.includes(null));
}
