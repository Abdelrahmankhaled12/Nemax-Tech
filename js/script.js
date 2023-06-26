// Get Elements
let body = document.getElementById("body");
let buttonScroll = document.getElementById("buttonScroll");
let spinner = document.getElementById("spinner");



window.onscroll = function () {
    if (window.scrollY >= 300) {
        buttonScroll.style.opacity = "1";
    } else {
        buttonScroll.style.opacity = "0";
    }

    buttonScroll.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
}

// Start Website
body.style.display = "none";

// After 4 sec from start 
window.onload = function () {
    setTimeout(() => {
        new WOW().init();
        body.style.display = "block";
        spinner.style.display = "none";
    }, 2000)
};

