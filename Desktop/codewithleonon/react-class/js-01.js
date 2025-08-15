//Var Key word
// Can be redicleared without error
//Can be hoited: Can be accessed brfore declaring as they are hoisted on top of the function
// 
//


function newClass(){
    if (true){
        var x = 10;
    }
    console.log(x); // 10   
    var x = 20; // redeclaring x
    console.log(x); // 20
    var x = 30; // redeclaring x again
    console.log(x); // 30
}
newClass(); // Calling the function to see the output

//Let Key word
//Can not be redeclared within a particular scope
//Cant be hoisted, and can't be accessed before declaring

function newLet(){
    let y = 20;
    if (true){
        let y = 30;
        console.log(y); // 30
        
     //let y = 40; // This will throw an error: Identifier 'y' has already been declared
        //console.log(y); // This line will not be executed due to the error above
    }
}
//This is outside the scope
let y = 49;
console.log(y);

// 3. Const; It has all the ppties of Let key word and
// It can't be reassigned once a value is assigned, it can't be changed
//You must assign a value once decleared

function newConst() {
    const pi = 3.14;
    console.log(pi); // 3.14      
    
}

//More Examples
for(var i = 0; i < 3; i++){
    setTimeout(() => {
        console.log('var i:', i);
    }, 100);

}

for(let j = 0; j < 3; j++){
    setTimeout(() => {
        console.log('let j:', j);
    }, 100);
}


//Arrow Function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
}
console.log(greetArrow('John')); // Hello, John!
console.log(greetArrow('Jane')); // Hello, Jane!

const add = (a, b) => a + b;
console.log( "The answer is " + add(33, 10)); // 43

const useSub = (x, y) => (x - y);
console.log(useSub(90, 23));


const myObject = {
    value: 10,
    regularMethod: function() {
        console.log("Regular Method 'this.value':", this.value);
    },
    arrowMethod: () => {
        console.log("Arrow Method 'this.value':", this.value);
        // 'this' here will likely be the global object (window in browser), not myObject
    }
};

TemplateLiterals = `This is a template literal with a variable: ${myObject.value}`;
console.log(TemplateLiterals); // This is a template literal with a variable: 10

const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting); // Hello, my name is John and I am 30 years old


const price = 45;
const quantity = 4;
const total = price * quantity;
console.log(`The total price is: $${total}`); // The total price is: 45 * 4 = $180

function getGreeting(){
    const hour = new Date().getHours();
    if (hour < 12) {
        return `Good morning!`;
    } else if (hour < 18) {
        return `Good afternoon!`;
    } else {
        return `Good evening!`;
    }
}
console.log(getGreeting()); // Outputs greeting based on the current time

//Objects destructuring
const person = {
    name1: "Alice",
    age1: 30,
    location1: "Wonderland"
};
const { name1, age1, location1 } = person;
console.log(name1); // Alice
console.log(age1); // 30
console.log(location1); // Wonderland

const userProfie = {
    id: 112,
    details: {
        email: "john@example.com",
        age: 30,
        name: "Stanley",
    },
    address: {
        city: "New York",
        country: "USA"
    }
};
console.log(userProfie.details.email); //
console.log(userProfie.details.age); // 30
console.log(userProfie.details.name); // Stanley
console.log(userProfie.address.city); // New York
console.log(userProfie.address.country); // USA      

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor); // red green blue

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
const [firstNum, secondNum, ...restNums] = numbers;         
console.log(firstNum); // 1     
console.log(secondNum); // 2  
console.log(restNums); // [3, 4, 5]

//Create an object book with properties like title, author, year, genre.
//Destructure title and author into variables.
//Destructure title into a variable named bookTitle and year into publicationYear.
//Try to destructure a non-existent property publisher with a default value of "Self-Published".

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
};

const { title, author, year, genre } = book;
console.log(title); // The Great Gatsby
console.log(author); // F. Scott Fitzgerald

const { title: bookTitle, year: publicationYear } = book;
console.log(bookTitle); // The Great Gatsby
console.log(publicationYear); // 1925

const { publisher = "Self-Published" } = book;
console.log(publisher); // Self-Published   


//Create an array coordinates = [10, 20, 30].Destructure the first two values into x and y.
//Destructure the third value into z by skipping the first two.
//Swap the values of two variables val1 and val2 using array destructuring.

const coordinates = [10, 20, 30];
const [x, w, z] = coordinates;      
console.log(x); // 10
console.log(w); // 20
console.log(z); // 30
const [ , , zValue] = coordinates; // Skipping first two values
console.log(zValue); // 30



//Create two arrays of numbers. Use the spread operator to create a third array that combines them, but with some extra numbers in between.
//Create two objects, each with a few properties. Merge them into a new object, and ensure one property value is overridden by the second object.
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

//Create a string, then use the spread operator to convert it into an array of its characters. (e.g., 'hello' becomes ['h', 'e', 'l', 'l', 'o']).
const str = "hello";
const charArray = [...str];
console.log(charArray); // ['h', 'e', 'l', 'l', 'o']


//Create two simple JavaScript files (and then  main one in a browser with a
//  <script type="module" src="main.js"></script> tag, or just conceptually):

//Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    setTimeout(() =>{
        if (success){
            resolve("Promise resolved successfully!");
        }else {
            reject("Promise rejected!");
        }
    }, 2000);
});

//Consuming a Promise (.then(), .catch(), .finally()):
myPromise
    .then((message) => {
        console.log(message); // Promise resolved successfully!
    })
    .catch((error) => {
        console.error(error); // This won't run in this case
    })
    .finally(() => {
        console.log("Promise handling complete."); // Always runs
    });

    //Example with async/await:
    const asyncFunction = async () => {
        try {
            const message = await myPromise;
            console.log(message); // Promise resolved successfully!
        } catch (error) {
            console.error(error); // This won't run in this case
        } finally {
            console.log("Promise handling complete."); // Always runs
        }
    };


    function stimulateFetch(url) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://api.example.com/data") {
                    resolve({ data: "Sample Data" });
                } else {
                    reject("Error fetching data");
                }
            }, 1000);
        });
    }

    async function fetchDataAndProcess() {
        try {
            const response = await stimulateFetch("https://api.example.com/data");
            console.log("Data fetched:", response.data);
            // Process the data here
        } catch (error) {
            console.error("Error:", error);
        }finally {
            console.log("Fetch operation complete.");
        }
    }

    //call the function to see the output
    fetchDataAndProcess().then((result => {
        console.log("Final result:", result);
    }));
    console.log("This will run immediately after calling fetchDataAndProcess()");

    //Create a simple Promise: Make one that resolves after 1 second with a message, and 
    // another that rejects after 1 second with an error. Consume both using .then() and .catch().
    const resolvePromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 1 second");
        }, 1000);
    });
    const rejectPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Rejected after 1 second");
        }, 1000);
    });

    //Consume both promises
    resolvePromise
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        });

    rejectPromise
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        });

        //Create an async function: Inside it, use await to call your simulateFetch
        //  (or a similar promise-returning function) twice in a row, simulating 
        // fetching data from two different endpoints.
        //Add try...catch: Implement error handling within your async function to 
        // catch a simulated network error (e.g., by changing api/success 
        // to api/fail in one of your simulateFetch calls).

        async function fetchData() {    
            try {
                const data1 = await stimulateFetch("http://127.0.0.1:8000/api/posts");
                console.log("Data 1:", data1.data);
                
                const data2 = await stimulateFetch("http://127.0.0.1:8000/api/posts");
                console.log("Data 2:", data2.data); // This will not run due to the error
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }