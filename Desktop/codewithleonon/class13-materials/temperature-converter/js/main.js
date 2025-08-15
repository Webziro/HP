//Write your pseduo code first! 
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("tempt");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        const inputTemp = parseFloat(form.querySelector("input[type='text']").value);
        if (isNaN(inputTemp)) {
            console.log("Please enter a valid number.");
            return;
        }

        // Assuming conversion from Celsius to Fahrenheit
        const convertedTemp = (inputTemp * 9/5) + 32;
        console.log(`Converted Temperature: ${convertedTemp} °F`);
    });
});