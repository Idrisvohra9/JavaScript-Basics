// # Map:

// | A map is similar to Objects as in it also stores data in key-value pairs.

// | But in a Map the key can be of any data type.

// | A map remembers the original insertion order of the keys meaning it can preserve the insertion order as the entries come they are appended at last.

// | A map has a property that represents the size of the map.

// | It can be directly iterable unlike Objects.

// | Keys in Maps are ordered by their creation time.

// | Do not have defalut keys.

// | Maps can store any type of values as keys or values. This includes primitive types, objects, functions, and even other maps.

// | Similar to Object, Keys within a Map are also unique, meaning each key can only exist once in the Map. If you try to set a value with an existing key, it will overwrite the previous value.

//# Creating a Map:

//// Method 1: by passing a 2d Array of entries:

const firstMap = new Map([
    ["Name", "Idris"],
    [true, 10],
    [{ age: 19 }, { gender: "Male" }],
    [null, undefined],
    [3.14, 69]
]);

//// Method 2: By set() method:

const secondMap = new Map();
// Syntax: mapObj.set(key, value);
secondMap.set("Name", "Jay");
secondMap.set(["Bruhh", "Sissy"], ["Freakin", "Idiot"])

console.log("firstMap:");
console.log(firstMap);
console.log();
// The keys and values in map are separated by arrow symbol '=>' rather than ':' a colon. This is really intresting..
console.log("secondMap:");
console.log(secondMap);
console.log()

console.log("Size of firstMap:");
console.log(firstMap.size);
console.log();


// Get properties:

console.log("Get property Name: ", firstMap.get("Name"));

const testMap = new Map([
    ["first", 1],
    [2, "second"],
    [3.0, "third"],
]);

console.log("test map: ", testMap);
console.log("After deleting the last property");
testMap.delete(3.0);
console.log(testMap);
console.log()

console.log("Check the existance of a property");
// Check if map has a certain property:

console.log("Does map have 4:", testMap.has(4) ? "yes" : "no");
console.log("Does map have 2:", testMap.has(2) ? "yes" : "no");

console.log();

// Type of map
console.log("Instance and type");
console.log("typeof", typeof firstMap);
console.log("Check if the variable is map:",firstMap instanceof Map ? "yes" : "no");
console.log()

// @ Iterating over a Map:
console.log("Iterating over a Map:")

// forEach loop:

firstMap.forEach(function(value, key) {
    console.log(key, value);
});

// we can also loop with .values(), .keys() or .entries()

// This is all to Maps. Maps are particularly useful when you need to associate additional data or metadata with an object or when you require a more flexible and reliable key-value store.

// Weak Maps vs Map:

// In a Map, the keys are held as strong references, meaning they prevent the objects from being garbage collected as long as the Map exists.

// WeakMap, on the other hand, only accepts objects as keys, and these keys are held as weak references. This means that if there are no other references to a key object, it can be garbage collected even if it is still present in the WeakMap.

// Consequently, this makes WeakMap suitable for scenarios where you want to associate some metadata or auxiliary data with objects, but without preventing them from being collected by the garbage collector when no longer needed.

const firstWeakMap = new WeakMap([])