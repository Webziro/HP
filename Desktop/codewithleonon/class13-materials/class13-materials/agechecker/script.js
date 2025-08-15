// Create a condition that checks users age. If age is less than 16, tell them they can't drive

//The event listener waits for the DOM to be fully loaded before executing the function
//The event listener is attached to the button with id "checkAge"
//When the button is clicked, it prevents the default form submission and retrieves the value from the input field with id "age"
//If the input is empty, it alerts the user that age input is required
//If an age is provided, it calls the checkAge function with the parsed integer value of age

document.addEventListener("DOMContentLoaded", function() {
    // const form = document.getElementById("ageForm");
    const checkButton = document.getElementById("checkAge");

    checkButton.addEventListener("click", function(event) {
        event.preventDefault();
        const ageInput = document.getElementById("age");
        const age = ageInput.value;
        if (age === null || age.trim() === "") {
            alert("Age input is required.");
        } else {
            checkAge(parseInt(age));
        }
    });
});

//Using ternary operator
function checkAge(age) {
    age < 16 ? alert("You can not Drive") 
    :  age < 18 ? alert("You can not enter the club") 
    :  age < 21 ? alert("You can not Drink") 
    :  age < 25 ? alert("No car") 
    :  age < 30 ? alert("You can not buy fancy car") 
    :  age >= 30 ? alert("You can be the President") 
    :  alert("You are done");
}

// Using if-else statements
// function checkAge(age) {
//     if (age < 16) {
//         alert("You can not Drive");
//     } else if (age < 18) {
//         alert("You can not enter the club");
//     } else if (age < 21) {
//         alert("You can not Drink");
//     } else if (age < 25) {
//         alert("No car");
//     } else if (age < 30) {
//         alert("You can not buy fancy car");
//     } else if (age >= 30) {
//         alert("You can be the President");
//     } else {
//         alert("You are done");
//     }
// }

// function that substracts 2 number and alert the diff
function subtractNumbers(num1, num2) {
    const difference = num1 - num2;
    alert(`The difference is: ${difference}`);
}
//subtractNumbers(10, 5); // Example usage
// subtractNumbers(20, 15); // Example usage with different numbers

// function addTwoDivide (a, b, c){
//     return (a + b) % c;
//     alert(addTwoDivide)
// }
// addTwoDivide(2, 2, 4);


function addTwoDivide(a, b, c){
    const num = (a + b) % c;
    return num;
    // alert (num);
}
addTwoDivide(2, 2, 1)