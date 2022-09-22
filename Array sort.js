let flower_arr = ["Daisy","Lotus","Lily","Sunflower","Rose","Adenium"];
let num_arr = [38,392,20,93,212,99,11];

// * Sorting an array in ascending order:

console.log("Sorting in ascending order:");
// Array of strings:
console.log("Array of strings:");
flower_arr.sort();
console.log(flower_arr);// #[ 'Adenium', 'Daisy', 'Lily', 'Lotus', 'Rose', 'Sunflower' ]

// Array of numbers:
console.log("Array of Numbers:");
// To Sort an array of numbers this parameter(Compare function) is used because otherwise the sort() method works in array of strings and not in array of numbers: 

num_arr.sort(function(a, b){return a - b});
console.log(num_arr);
// # Output:
[
    11, 20, 212, 38,
   392, 93,  99
 ]

console.log();

// *Sorting an array in descending order:

console.log("Sorting in descending order:");
// Array of strings:
console.log("Array of strings:");
flower_arr.reverse();
console.log(flower_arr);// #[ 'Sunflower', 'Rose', 'Lotus', 'Lily', 'Daisy', 'Adenium' ]

// Array of numbers:
console.log("Array of Numbers:");
num_arr.reverse();
console.log(num_arr);
// # Output:
[
    99, 93, 392, 38,
   212, 20,  11
 ]

// imp:If the array has been sorted before using the sort function, it can be sorted in descending order using the reverse function.

//# The Compare Function
// *The purpose of the compare function is to define an alternative sort order.

// *The compare function should return a negative, zero, or positive value, depending on the arguments:

//| function(a, b){return a - b}
//$ When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

//$ If the result is negative a is sorted before b.

//$ If the result is positive b is sorted before a.

//$ If the result is 0 no changes are done with the sort order of the two values.

console.log();

// # Sorting an array in random order:

console.log("Sorting an array in random order:");

console.log("Math.random() method:\n");

console.log("Array of strings:");

flower_arr.sort(function(a, b){return 0.5 - Math.random()});

console.log(flower_arr,"\n");

console.log("Array of Numbers:");

num_arr.sort(function(a, b){return 0.5 - Math.random()});

console.log(num_arr,"\n");
// imp: The random sorting in this way is not accurate it prefers some elements over others.

console.log("The Fisher Yates Method:\n");

console.log("Array of strings:");
for(var i=flower_arr.length-1; i > 0;i--) {
  let n= Math.floor(Math.random()*i);
  let k = flower_arr[i];
  flower_arr[i] = flower_arr[n];
  flower_arr[n] = k;
}
console.log(flower_arr,"\n");

console.log("Array of Numbers:");
for(var i=num_arr.length-1; i > 0;i--) {
  let n= Math.floor(Math.random()*i);
  let k = num_arr[i];
  num_arr[i] = num_arr[n];
  num_arr[n] = k;
}
console.log(num_arr,"\n");

// # Finding The maximum and minimum value of element in an array:

// * As we sorted the arrays in ascending and descending order we can use that to find the maximum and minimum value from an array:
// $ For example an array that has been sorted in ascending order will have the minimum value at the beginning of the array and the maximum value at the end:

// $ Let's see it in action:

console.log("The array: ",num_arr);

num_arr.sort(function(a,b){return a - b});// ascending order.(We have to use compare function to sort array of numbers)

console.log("The maximum value in the array is " + num_arr[num_arr.length-1]);
console.log("The minimum value in the array is " + num_arr[0]);

console.log();

// * By Math functions:
console.log("By Math methods:");

console.log("The maximum value in the array is " + Math.max.apply(null,num_arr));
// | Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
console.log("The minimum value in the array is " + Math.min.apply(null,num_arr));

