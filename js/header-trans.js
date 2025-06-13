document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
// This code listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing.
// It selects the hamburger menu and navigation menu elements, then adds a click event listener to the hamburger menu.