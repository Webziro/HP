//In this assignment, you will use JavaScript to solve linear equations of the form: [ ax + b = c ] : [ x = {c - b}/{a} ]

//Declearing the function and passing the 3 known argument, then declearing it as a variable
function solveEquation(a, b, c){
    let x = (c - b) / a;
    return x;
}
// solveEquation(2, 3, 11);
console.log(solveEquation(2, 3, 11))
console.log(solveEquation(5, 10, 35));
console.log(solveEquation(3, 1, 10));  

// Additional test cases
console.log(solveEquation(4, 7, 23));  
console.log(solveEquation(6, -9, 21)); 
console.log(solveEquation(2, 5, 15));  


//Function for if a = 0; : solving for [ 0x + b = c ]
function ifZero(a, b, c){
    let x = (c - b) / a;
    return x;
}
console.log(ifZero(0));
