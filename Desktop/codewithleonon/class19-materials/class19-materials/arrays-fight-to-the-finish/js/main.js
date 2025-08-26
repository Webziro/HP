//Create an array of movie titles. Loop through the array and each element to the h2.

// Create an array of movie titles
const movieTitles = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "12 Angry Men",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
];

// Get the movie list div
const movieListDiv = document.getElementById("movie-list");

// Loop through the array and append each element to an h2
movieTitles.forEach((title) => {
    const h2 = document.createElement("h2");
    h2.textContent = title;
    movieListDiv.appendChild(h2);
});

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let numbers = [1, 3, 4, 5, 9, 2, 22];

// ... existing code ...
for (let index = 0; index < numbers.length; index++) {
    numbers[index] = numbers[index] + 3;
    console.log(numbers[index]);
}

//Find the average of all the numbers from question three
let totalNum = 0;
for (let index = 0; index < numbers.length; index++) {
    totalNum += numbers[index];
}
let averageNum = totalNum / numbers.length;
console.log(averageNum);