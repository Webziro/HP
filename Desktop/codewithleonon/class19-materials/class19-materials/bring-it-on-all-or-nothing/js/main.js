// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let theVariable = false;
console.log (theVariable)

// Declare a variable, reassign it to your favorite color, and console log the value
let myFavColor;
myFavColor = "White"
console.log(myFavColor);

// *Functions*
    // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. 
    // Return the result. Call the function.
    function takesFour(num1, num2, num3, num4){
        let sumDiv = num1 + num2 + num3;
        let result = sumDiv /num4
        return result;
    }
    

    try {
        let result = takesFour(1, 2, 1, 3);
        console.log(result);
    } catch (error) {
        console.console.error();
        
    }


// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNum(n1, n2){
    let result = Math.pow(n1, n2)
    console.log(result);
 }
 twoNum(3, 2);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function thatTake( booleanValue, stringValue){
    if (booleanValue === true) {
        alert(stringValue)
    } else {
        console.log(stringValue)
    }
}
thatTake(true, "stanley");
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" 
// instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function takesNum(){

}