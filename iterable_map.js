const arr = [5, 6, 7, 10, 11];

// map function is used when there is a similar function that is to be performed on the elements of an iterable.

// Syntax of map function:
// * iterable.map(func(currentValue*, index?, arr?), thisValue)
// * the '*' in the above means that the parameter is compulsorily required and '?' means that the parameter is optional
// # Other info about map():

//| map() creates a new array from calling a function for every array element.

//| map() calls a function once for each element in an array.

//| map() does not execute the function for empty elements.

//| map() does not change the original array.

// Now lets make a function for our map function.

function convertToWord(elem) {
    let w = "Above 10";
    switch (elem) {
        case 0:
            w = "Zero"
            break;
        case 1:
            w = "One"
            break;
        case 2:
            w = "Two"
            break;
        case 3:
            w = "Three"
            break;
        case 4:
            w = "Four"
            break;
        case 5:
            w = "Five"
            break;
        case 6:
            w = "Six"
            break;
        case 7:
            w = "Seven"
            break;
        case 8:
            w = "Eight"
            break;
        case 9:
            w = "Nine"
            break;
        case 10:
            w = "Ten"
            break;
    }
    return w;
}

const toWord = arr.map(convertToWord);
console.log(toWord);
// // Output: [ 'Five', 'Six', 'Seven', 'Ten', 'Above 10' ]

// We can also use 