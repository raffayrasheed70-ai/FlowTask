/* =====================================================
   VYORA — HEADER JAVASCRIPT
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");


// Open / Close Mobile Menu
menuToggle.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Close mobile menu after clicking a link
const mobileNavLinks =
    document.querySelectorAll(".mobile-links a");

mobileNavLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


// Close menu when clicking outside
document.addEventListener("click", (event) => {

    if (
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});

/* =========================
   VYORA FLOW INTERACTION
========================= */

const flowSteps = document.querySelectorAll(".flow-step");

flowSteps.forEach((step) => {
    step.addEventListener("mouseenter", () => {

        flowSteps.forEach((item) => {
            item.classList.remove("active");
        });

        step.classList.add("active");
    });
});