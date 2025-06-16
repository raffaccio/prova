
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
// This code listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing.
// It selects the toggle button for dark mode and adds a click event listener to it.