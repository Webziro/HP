//Print Numbers from 1 to 10: Write a do...while loop that prints the numbers from 1 to 10.

//declare a variable name num and Initialize it to 1.
let num = 1;
//console.log num and write the condition
do {
    // console.log(num);
    num++;
} while (num <= 10);    


//Sum of Numbers: Write a do...while loop that calculates the sum of all numbers from 1 to 100. 
// The loop should stop once the sum reaches 5050.
//Decleare a variable call sumOfAllNumbers and initializze it to 1
let sumOfAllNumbers = 0;
let i = 1;
do {
  sumOfAllNumbers += i;
  i++;
} while (i <= 100);
// console.log(sumOfAllNumbers);

//Print Even Numbers Between 1 and 20: Write a do...while loop that prints all even numbers between 1 and 20.
// - Initialize a variable a to 1.
// - In each iteration, check if x is even by using the modulus operator (x % 2 === 0).
// - If x is even, print it to the console.
// - Increment x by 2 in each iteration.
// - The loop continues until x reaches 20.

let x = 1;
do {
  if (x % 2 === 0) {
    console.log(`Even number: ${x}`);
  }
  x++;
} while (x <= 20);

//For the sum of numbers task, calculate the sum using a do...while loop and compare it to the sum using the standard formula 
// for the sum of the first n natural numbers:
// [ \text{Sum} = \frac{n(n + 1)}{2} ] Verify the result and explain the comparison in your report.
