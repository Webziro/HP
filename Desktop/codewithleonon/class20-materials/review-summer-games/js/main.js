//Create a function that takes in an array of numbers. Multiply each number together and alert the product.
function takesNumbersArray(){
    const numbers = [1, 2, 3, 4];
    let product = 1;
    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }
    alert(product);
}
// function takesNumbersArray(arr) {
//     const product = arr.reduce((acc, curr) => acc * curr, 1);
//     alert(product);
// }
// takesNumbersArray([1, 2, 3, 4]); // Example usage

