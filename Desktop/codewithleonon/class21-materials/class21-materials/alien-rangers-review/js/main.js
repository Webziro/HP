//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ["Tales by moon light", "African Child", "Who wants to be a Millionaire", "BBN"];
for (let index = 0; index < tvShows.length; index++) {
    //console.log(tvShows[index]); 
}
// tvShows.forEach(show => console.log(show));


//Create and array of numbers
const numb = [2, 3, 7, 8, 100, 87, 35, 90, 55, 200];
//Return a new array of numbers that includes every even number from the previous Arrays
const evenNumb = numb.filter(num => num % 2 === 0);
//console.log(evenNumb);

//Create a function that takes in an array of numbers
function sumSecondLowestAndHighest(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const secondLowest = sorted[1];
    const secondHighest = sorted[sorted.length - 2];
    alert(secondLowest + secondHighest);
}
//sumSecondLowestAndHighest([2, 5, 6, 8]);

//Create a function that returns head or tail randomly and as fairly as possible. Call the function.
function flipCoin() {
    return Math.random() < 0.5 ? "head" : "tail";
}
console.log(flipCoin());