// For loop
function loop21(){
    for(let i= 0; i < 21; i++){
        console.log("The number is " + i + " and the square of the number is " + i * i);
    }
}
//console.log(loop21());

//arrays
const movies = ["The Dark Knight", "The Dark Knight Rises", "The Dark Knight"];
//Accessing the elements of the array
console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);

//Adding elements to the array
movies.push("The Dark Knight Rises");
console.log(movies);

//Loop an array
for (let i = 0; i < movies.length; i++){
    console.log("The movie is " + movies[i]);
}

//Objects
const movie = {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan"
}
console.log(movie.year, movie.director);

//Adding properties to an object
movie.rating = 9.0;
console.log(movie);

//Deleting properties from an object
delete movie.rating;
console.log(movie);

//using foreach loop
const names =['stanley', 'Aamziro', 'Chibuzo', 'Nnneka'];
names.forEach(name => {
    console.log(name);
});

for (let index = 0; index < names.length; index++) {
    console.log(names);
    
}

//Remove from arra Add to start of arr, also specifying the index
names.pop();
console.log(names);

names.unshift('BBW-Grace');
console.log(names);

names.splice(0, 1);
console.log(names);

// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
const musketeers = ["Athos", "Porthos", "Aramis"];

// Shows each array element using a for loop.
musketeers.forEach(musketeer => {
    console.log(musketeer);
});
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan");
// Shows each array element using the forEach() method.
for (let index = 0; index < musketeers.length; index++) {
    console.log(musketeers);
    
}
// Remove poor Aramis. ie removing item with index 2 and just 1 item
musketeers.splice(2, 1)
console.log(musketeers)

// Shows each array element using a for-of loop.
    for (const musketeer of musketeers) {
        console.log(musketeer);
    }

//2. Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10];
// function sumOfValues(values){
//     return values.reduce((total, current) => total + current, 0);
// }
// console.log(sumOfValues(values));

// Write a program that asks the user for a word until the user types "stop".
//  The program then shows each of these words, except "stop".

// Calculate and log the sum of values
const sumOfValues = values.reduce((total, current) => total + current, 0);
console.log(sumOfValues);

// Collect words until the user types "stop" and then display them
const enteredWords = [];
while (true) {
	const input = prompt('Enter a word (type "stop" to finish):');
	if (input === null) {
		break;
	}
	if (input.toLowerCase() === 'stop') {
		break;
	}
	enteredWords.push(input);
}

enteredWords.forEach(word => {
	console.log(word);
});

