const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links")
menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
        menuIcon.src = "./photos/icons/close.svg"
    } else {
        menuIcon.src = "./photos/icons/open.svg"
    }
})
