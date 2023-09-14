function filterObjectsWithFavourite(arr) {
    return arr.filter(obj => 'favourite' in obj && obj.favourite === "chocolate");
}

// Example usage
const inputArray = [
    { name: 'Alice', favourite: 'apple' },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', favourite: 'chocolate' },
    { name: 'David', hobby: 'reading' }
];

const filteredArray = filterObjectsWithFavourite(inputArray);
console.log(filteredArray);
