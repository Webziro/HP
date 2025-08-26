//Create a function that takes in a number. // The function should return an array that contains every number from 1 to that number as seperate elements
function createNumberArray(maxNumber) {
    let numberArray = [];
    
    for (let i = 1; i <= maxNumber; i++) {
        numberArray.push(i);
    }
    
    return numberArray;
}

// The function should return an array that contains every number from 1 to that number as seperate elements

// Test the function
console.log(createNumberArray(5));  // Output: [1, 2, 3, 4, 5]
console.log(createNumberArray(10)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(createNumberArray(3));  // Output: [1, 2, 3]

