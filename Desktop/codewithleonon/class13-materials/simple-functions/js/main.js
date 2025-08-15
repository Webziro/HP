//create a function that adds two numbers and alerts the sum

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
//     document.getElementById('calculate').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     const num1 = parseFloat(document.getElementById('number1').value);
//     const num2 = parseFloat(document.getElementById('number2').value);
//     const sum = addNumbers(num1, num2);
//     alert(`The sum is: ${sum}`); // or alert(sum)
    
// });

//create a function that multiplys three numbers and console logs the product

// function multiplyNumbers(num1, num2, num3) {
//     return num1 * num2 * num3;
// }
//     document.getElementById('multiply').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent form submission
//     const num1 = parseFloat(document.getElementById('number1').value);
//     const num2 = parseFloat(document.getElementById('number2').value);
//     const num3 = parseFloat(document.getElementById('number3').value);
//     const sum = multiplyNumbers(num1, num2, num3);
//     alert(`The sum is: ${sum}`); // or alert(sum)
    
// });

//create a function that divides two numbers and returns the ???
function divides(num1, num2) {
    if (num1 <= 0) {
        return "Cannot divide by zero";
    }
    return num1 / num2;
}
document.getElementById('divide').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = divides(num1, num2);
    console.log(`The result is: ${result}`); // or alert(result)
    
});
