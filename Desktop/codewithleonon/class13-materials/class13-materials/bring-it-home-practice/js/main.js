// *Variables*
// Create a variable and console log the value
let girlType = "Fat Girl"
// console.log (girlType);

// Create a variable, add 10 to it, and alert the value
let add = 0;
add + 10;
//alert(add);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(n1, n2, n3, n4){
    const total = n1 - n2 - n3 - n4
    alert(total);
}
// sub(10, 8, 6, 4);

// Create a function that divides one number by another and returns the remainder
function dividesNum(num1, num2){
    const num = num1 % num2
    alert(num);
}
// dividesNum(4, 3)



// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNum(x, y ){
    const checkJumanji = x + y;
    if(checkJumanji > 50){
        alert("Jumanji");
    }else{
        alert("You are not a chad");
    }
}
// addTwoNum(30, 50);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNum(f, g, h){
    const chechMultiply = f * g * h;
    if(chechMultiply % 3 === 0){
        alert("ZEBRA!");
    }else{
        alert("This is not it");
    }
}
multiplyThreeNum(3, 1, 4.6);