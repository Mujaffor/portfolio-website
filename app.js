/* ===========================
   PRELOADER
=========================== */
window.onload = () => {
    document.getElementById("preloader").style.display = "none";
};

/* ===========================
   AOS INIT
=========================== */
AOS.init({
    duration: 900,
});

/* ===========================
   MOBILE MENU
=========================== */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

/* ===========================
   DARK / LIGHT MODE
=========================== */
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.onclick = () => {
    document.body.classList.toggle("light");

    themeToggle.classList.contains("fa-moon")
        ? themeToggle.classList.replace("fa-moon", "fa-sun")
        : themeToggle.classList.replace("fa-sun", "fa-moon");
};

/* ===========================
   SKILL BAR ANIMATION
=========================== */
const bars = document.querySelectorAll(".bar-fill");

function animateBars() {
    bars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent;
    });
}

window.addEventListener("scroll", () => {
    const skills = document.getElementById("skills");
    const pos = skills.getBoundingClientRect().top;

    if (pos < window.innerHeight - 150) animateBars();
});

/* ===========================
   SWIPER TESTIMONIAL SLIDER
=========================== */
new Swiper(".swiper", {
    loop: true,
    autoplay: { delay: 2000 },
    pagination: { el: ".swiper-pagination", clickable: true },
});