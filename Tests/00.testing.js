class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBinaryTree(array) {
    const nodes = new Map();

    // Create nodes for each pair of integers
    for (let i = 0; i < array.length; i++) {
        const pair = parsePair(array[i]);
        if (!nodes.has(pair[0])) {
            nodes.set(pair[0], new Node(pair[0]));
        }
        if (!nodes.has(pair[1])) {
            nodes.set(pair[1], new Node(pair[1]));
        }
        const parent = nodes.get(pair[0]);
        const child = nodes.get(pair[1]);
        if (parent.left === null) {
            parent.left = child;
        } else if (parent.right === null) {
            parent.right = child;
        } else {
            // More than two children for a parent, not a binary tree
            return false;
        }
    }

    // Find the root node
    let root = null;
    for (const node of nodes.values()) {
        if (node.left === null && node.right === null) {
            if (root === null) {
                root = node;
            } else {
                // Multiple nodes without parents, not a binary tree
                return false;
            }
        }
    }

    // Check if the tree is valid
    return isValidBinaryTree(root);
}

function parsePair(pairString) {
    const pair = pairString
        .replace("(", "")
        .replace(")", "")
        .split(",");
    return [parseInt(pair[0]), parseInt(pair[1])];
}

function isValidBinaryTree(node, min = -Infinity, max = Infinity) {
    if (node === null) {
        return true;
    }
    if (node.value <= min || node.value >= max) {
        return false;
    }
    return (
        isValidBinaryTree(node.left, min, node.value) &&
        isValidBinaryTree(node.right, node.value, max)
    );
}

// Example usage
const inputArray = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
console.log(isBinaryTree(inputArray));  // Output: true
