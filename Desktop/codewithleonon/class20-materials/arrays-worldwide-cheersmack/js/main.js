//Create a function that takes in a number. The function should return an array that contains every number
//  from 1 to that number as seperate elements
function arrayFromOneToNum(num) {
    const result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}
