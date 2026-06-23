// =============================
// Mobile Navigation Toggle
// =============================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// =============================
// Close Mobile Menu After Click
// =============================

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =============================
// Typing Animation
// =============================

const typingText = document.querySelector(".typing");

const words = [
    "Student",
    "Web Developer",
    "UI/UX Designer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 150);
}

typeEffect();


// =============================
// Scroll Reveal Animation
// =============================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


const hiddenElements = document.querySelectorAll(
    ".container, .hero-image, .card, .project-card, .skill-card"
);

hiddenElements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// =============================
// Active Navigation Highlight
// =============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }

    });

});


// =============================
// Navbar Background on Scroll
// =============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(0, 0, 0, 0.6)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.4)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.08)";

        navbar.style.boxShadow = "none";

    }

});


// =============================
// Smooth Button Hover Glow
// =============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");

    });

});


// =============================
// Page Loading Animation
// =============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
