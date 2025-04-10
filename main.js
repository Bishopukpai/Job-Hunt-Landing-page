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

/*Scroll Reveal Animation*/

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

ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
   interval: 500,
})

ScrollReveal().reveal(".explore__card", {
    duration: 1000,
   interval: 500,
})

ScrollReveal().reveal(".job__card", {
    ...scrollRevealOption,
   interval: 500,
})

ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
   interval: 500,
})

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        loop: true, // Enables infinite looping
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false,
        },
        slidesPerView: 1, // Shows one slide at a time
        spaceBetween: 10, // Adds spacing between slides
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Enables clicking pagination dots
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
