let hamMenu = document.querySelector('.nav-bar');
let navLinks  = document.querySelector('.nav-links');

/**********Add Click Event To The Hamburger**********/
hamMenu.addEventListener('click', function() {
    navLinks.classList.toggle('dropdown');
})