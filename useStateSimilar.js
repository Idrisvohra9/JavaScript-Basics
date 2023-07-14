function useState(initialValue) {
    let state = initialValue;

    const getState = state;

    const setState = (newValue) => {
        state = newValue;
    };

    return [getState, setState];
}

// Usage example
const [count, setCount] = useState(0);

console.log(count); // Output: 0

setCount(count + 1); // Update the state

console.log(count); // Output: 1
