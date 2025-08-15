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
// const enteredWords = [];
// while (true) {
// 	const input = prompt('Enter a word (type "stop" to finish):');
// 	if (input === null) {
// 		break;
// 	}
// 	if (input.toLowerCase() === 'stop') {
// 		break;
// 	}
// 	enteredWords.push(input);
// }

// enteredWords.forEach(word => {
// 	console.log(word);
// });

//Strings and conversion
const str = "I am a string";

console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.split(" "));
// console.log(str.split(""));
console.log(str.split(""));


//OBJECT ORIENTED PROGRAMMING OOP
const pen = {
    type: "ballpoint",
    color: "blue",
    price: 1.99
}
console.log(pen.type);
console.log(pen.color);
console.log(pen.price);
console.log(`The pen is ${pen.type} and the color is ${pen.color} and the price is ${pen.price}`);

pen.type = "BBW-PEN"
console.log(pen.type);

//Adding a new property to the object
pen.brand = "BBW";
console.log(pen.brand);

//Deleting a property from the object
delete pen.brand;
console.log(pen.brand);

// JavaScript even offers the ability to dynamically add new properties to an already created object.
pen.newProperty = "girls";
console.log(pen.newProperty);
console.log(pen);

//Creating a mini game with character called Kala

// const kala ={
//     age : "26",
//     body : "BBW-Big",
//     health : "150"
// }
// console.log(`kala is ${kala.age} years old, ${kala.body} and has ${kala.health} health`);
// //Kala is harmed by an arrow
// kala.health = kala.health - 10;
// console.log(`kala is ${kala.age} years old, ${kala.body} and has ${kala.health} health`);


const kala ={
    age : "26",
    body : "BBW-Big",
    health : "150",
    name : "Big-Kala",
    xp : 0,

    //Introducing a method: It adds value to an object
        character(){
            return `This charater's name is ${this.name} of age ${this.age} is of body type ${this.body} and has a health of ${this.health} 
            and total point of  ${this.xp}`
        }
    };
    
    console.log(kala.character());

//Kala celebrated a new birthday
kala.age = Number(kala.age) + 1 ;
console.log(kala.age);

//Kala was shoot by an arrow and lost -15 lives
kala.health -= 15;
console.log(kala.health);

//Adding a new ppties to Kala
kala.xp +=20;
console.log(kala.character());


// TODO: create the dog object here
const dog = {
    name : "Jacky",
    species : "Turaya",
    size : "28cm X 12m",

    bark(){
        return `The dog name is ${this.name} is a ${this.species} dog measuring ${this.size} `
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);



//Problem
const r = Number(prompt("Enter the circle radius:"));
    
// TODO: create the circle object here
const circle = {
    radius : r,
    circumference : function (){
        return 2 * Math.PI * this.radius
    },
    area : function(){
        return Math.PI * Math.pow(this.radius, 2)
    }

}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
 

// Write a program that creates an account object with the following characteristics:
// const account = {
//     name : "Alex",
//     balance : -5,
//     credit (amount){
//         this.balance += amount;
//     },
//     describe(){
//         return `The account name: ${this.name} has ${this.balance}`
//     }
// }
// //This credits the account
// account.credit(200)
// //This debits the account
// account.credit(-100)
// console.log(account.describe());



const account = {
    name: 'Stanley Amaziro',
    balance: 0,
    credit(amount) {
        if (amount > 0) {
            console.log(`Credited ${amount} to ${this.name}`);
        } else if (amount < 0) {
            console.log(`Debited ${Math.abs(amount)} from ${this.name}`);
        }
        this.balance += amount;
    },
    getBalance() {
        return this.balance;
    }
};

account.credit(2000);
console.log(`Current balance: ${account.getBalance()}`);