let hamMenu = document.querySelector('.nav-bar');
let navLinks  = document.querySelector('.nav-links');
let eyeIcon = document.querySelector("#visible-img");
let eyeIconHidden = document.querySelector("#invisible-img");


/**********Add Click Event To The Hamburger**********/
hamMenu.addEventListener('click', function() {
    navLinks.classList.toggle('dropdown');
})

eyeIcon.addEventListener("click", function() {
    eyeIconHidden.classList.remove("hidden");
    eyeIcon.classList.add("hidden");
    password.setAttribute("type", "text");
});

eyeIconHidden.addEventListener("click", function() {
    eyeIconHidden.classList.add("hidden");
    eyeIcon.classList.remove("hidden");
    password.setAttribute("type", "password")
});
