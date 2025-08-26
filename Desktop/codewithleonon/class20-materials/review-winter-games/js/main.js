//Create a function that takes in an array of numbers. 
// Return a new array containing every even number from the original array (do not use map or filter)
function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Example usage


const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic"
};
alert(pen.color); // This will alert "blue"