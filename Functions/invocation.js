// Function invocation is also known as function call.

// A standard way to invoke a function is like this:

// functionName(**args);

// But it is considered to be not a good practice.

// * What is 'this' keyword?

// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.