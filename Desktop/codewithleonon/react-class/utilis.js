
//utils.js:export a const called MAX_VALUE (e.g., 100).
//export a function capitalize(str) that takes a string and returns it with the first letter capitalized.
//export default an object { author: 'YourName', version: '1.0' }.
export const MAX_VALUE = 100;
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const description = "This is the new web page";
export default { author: 'YourName', version: '1.0' };  
