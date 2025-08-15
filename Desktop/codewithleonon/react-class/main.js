
//main.js:import MAX_VALUE and capitalize using named imports.
//import the default export from utils.js and call it appInfo.
//Use console.log() to demonstrate that you can access MAX_VALUE, capitalize("hello"), and appInfo.author.
import { MAX_VALUE, capitalize } from './utils.js';
import appInfo from './utils.js';
import { description } from './utils.js';

console.log(MAX_VALUE); // 100
console.log(capitalize('hello')); // Hello
console.log(appInfo.author); // YourName
console.log(appInfo.version); // 1.0
console.log(description); // This is the new web page

