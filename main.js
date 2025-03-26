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