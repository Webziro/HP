//Write your pseduo code first! 
document.addEventListener("DOMContentLoaded", function() {
    tempt = document.getElementById("tempt");
    const checkButton = document.getElementById("convert");

    checkButton.addEventListener("click", function(event) {
        event.preventDefault();
        const temptinput = document.getElementById("temp");
        const tempt = temptinput.value;
        if (tempt === null || tempt.trim() === "") {
            alert("Tempt input is required.");
        } else {
            convert(parseInt(tempt));
        }
    });
});

function convert(){
    convert(parseInt(tempt) + 24);
}