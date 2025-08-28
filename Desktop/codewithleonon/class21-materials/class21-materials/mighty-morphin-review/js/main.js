// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = "Christmas";
result = favHoliday.toUpperCase();
console.log(result);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const str = "Hello, World!";
console.log(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subtractFrom100(num1, num2, num3, num4, num5) {
    const total = num1 + num2 + num3 + num4 + num5;
    const difference = 100 - total;
    alert(Math.abs(difference));
}
subtractFrom100(10, 20, 30, 40, 50);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function logLowestAndHighest(num1, num2, num3) {
    const lowest = Math.min(num1, num2, num3);
    const highest = Math.max(num1, num2, num3);
    console.log("Lowest:", lowest);
    console.log("Highest:", highest);
}
console.log(logLowestAndHighest(10, 20, 30));


// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function flipCoin() {
    return Math.random() < 0.5 ? "heads" : "tails";
}
// console.log(flipCoin());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function flipCoinMultipleTimes(times) {
    for (let i = 0; i < times; i++) {
        console.log(flipCoin());
    }
}
flipCoinMultipleTimes(21);
