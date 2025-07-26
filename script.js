// ============ DARK / LIGHT MODE TOGGLE ============
const toggleSwitch = document.getElementById("toggle-switch");
const body = document.body;

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// ============ TYPING EFFECT ============
// Make sure you included Typed.js CDN in your HTML <head>
const typed = new Typed(".typedText", {
    strings: ["Paras Kr. Kushwaha", "Programmer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// ============ ACTIVE NAV LINK ON SCROLL ============
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });
};
