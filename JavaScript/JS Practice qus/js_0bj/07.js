/** Problern Statement
You are working on a system that stores product details in an object.
However, for some functionalities, the data needs to be in an array
format.
Challenge
Write a function that converts an object into an array of key-value
pairs. Each element in the array should be an array where the first
item is the key and the second item is the value.
Constraints
• The input should be a valid
• Ifthe object is empty, retum an empty array. */


function objectToArray(obj) {
    const keyValue = Object.entries(obj) //  Object.entries convert object to array
    return keyValue
}

const bj = {
    name: "Pratim",
    age: 23
}

console.log(objectToArray(bj));
