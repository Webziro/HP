// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". 
// If the first number is greater than the last number, alert "Bye". 
// If they are equal, alert "We close in an hour".


function takesArray(arr) {
  if (arr.length > 0) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    if (first < last) {
      alert("Hi");
    } else if (first > last) {
      alert("Bye");
    } else {
      alert("We close in an hour");
    }
  } else {
    alert("Array is empty");
  }
}

takesArray([1, 2, 3]);