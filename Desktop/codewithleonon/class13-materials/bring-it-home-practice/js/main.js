// *Variables*
// Create a variable and console log the value
const obsssesion = "Coding and Love for Tall Thick BBW Black Ladies";
console.log(` My Obsssesion are: ${obsssesion}`);

// Create a variable, add 10 to it, and alert the value
// let number = 5;
// number += 10;
// alert(number); //or

const num = 5;
total = num + 10;
console.log(total);

// Create a variable that subtracts 4 from 15 and console logs the value
const subtraction = 15 - 4;
console.log(subtraction);


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumbers(a, b, c, d) {
    const difference = a - b - c - d;
    console.log(difference);
}
subFourNumbers(20, 5, 3, 2); 

// Create a function that divides one number by another and returns the remainder
function remainder(num1, num2) {
    return num1 % num2;
}
console.log(remainder(10, 3)); 

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert You dont Love BBW Women
function addTwoNumbers(num1, num2) {
    const sum = num1 + num2;
    if (sum > 50) {
        alert("You Don't Love BBW Women");
    }else{
        console.log("You Love BBW Women");
    }
}
addTwoNumbers(0, 25); // Example usage



// Method 2: Using the Form from the HTML. 
// Create a function that adds two numbers and if the sum is greater than 50 alert You dont Love BBW Women


// This function will be triggered when the form is submitted
// It will prevent the default form submission behavior, retrieve the input values, and perform the addition check
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultDiv = document.getElementById("result");

    // Add an event listener to the form for the submit event
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        // Check if the inputs are valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            resultDiv.innerHTML = "Please enter valid numbers.";
            return;
        }

        // Calculate the sum and check the condition
        const sum = num1 + num2;
        
    if (sum % 1 !== 0 || sum < 0) {
      resultDiv.innerHTML = "You Love BBW Women &#x263A;"; // Smiley face for positive sum
    } else if (sum > 50) {
      resultDiv.innerHTML = "You don't Love BBW Women &#x1F61E;"; // Sad face for sum greater than 50
    } else {
      resultDiv.innerHTML = "You don't Love BBW Women &#x1F61E;"; // Sad face for sum less than or equal to 50
    }
    });
});

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function numDivBy3(b, c, d){
   const product = b * c * d;
   if (product % 3 === 0) {
       console.log("ZEBRA");
   }else{
       console.log("Not ZEBRA");
   }
}
numDivBy3(3, 6, 9); // Example usage