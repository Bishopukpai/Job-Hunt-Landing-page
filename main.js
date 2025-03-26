const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

/** Handle the nav menu transition */
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    /**Set the hambuger menu icon to become a close icon */
    menuBtnIcon.setAttribute("class", isOpen ?"ri-close-line" : "ri-menu-line")
})

navLinks.addEventListener("click", (e)=> {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line")
})

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500
})

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 1000
})

ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500
})