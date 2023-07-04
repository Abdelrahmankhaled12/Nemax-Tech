// Get Elements
let body = document.querySelectorAll('[data-hide="hide"]');
let buttonScroll = document.getElementById("buttonScroll");
let waviy = document.getElementById("waviy");



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
body.forEach(element=>{
    element.style.display = "none";
});

// After 4 sec from start 
window.onload = function () {
    setTimeout(() => {
        new WOW().init();
        body.forEach(element=>{
            element.style.display = "block";
        });
        waviy.style.display = "none";
    }, 3800)
};

