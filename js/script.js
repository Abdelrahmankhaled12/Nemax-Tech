new WOW().init();


// let btnMenu = document.getElementById("btnMenu");
// let menuButton = document.getElementById("menuButton");
// let btnclose = document.getElementById("btnclose");
let body = document.getElementById("body");
let buttonScroll = document.getElementById("buttonScroll");





// btnMenu.addEventListener("click", () => {
//     menuButton.classList.remove("hide")
//     body.classList.add("hide")
// })

// btnclose.addEventListener("click", () => {
//     menuButton.classList.add("hide");
//     body.classList.remove("hide")
// })


window.onscroll = function () {
    if (window.scrollY >= 300) {
        buttonScroll.style.opacity = "1";
    } else {
        buttonScroll.style.opacity = "0";
    }

    buttonScroll.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // if (window.scrollY >= 100) {
    //     btnMenu.style.opacity = "1";
    // } else {
    //     btnMenu.style.opacity = "0";
    // }
}



