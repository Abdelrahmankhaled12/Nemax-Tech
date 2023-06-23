// Get Elements
let spinner = document.getElementById("spinner");
let background = document.getElementById("background");

// Start Website
background.style.display = "none";
body.style.display = "none";

// After 4 sec from start 


window.onload = function () {
    setTimeout(() => {
        body.style.display = "block";
        background.style.display = "block";
        spinner.style.display = "none";
    }, 2000)
};

