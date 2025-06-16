
document.addEventListener("DOMContentLoaded", function () {
    // Select the toggle icon container
    const iconContainer = document.getElementById("mode-toggle-icon");

    function loadSVG(path) {
        return fetch(path).then(res => res.text());
    }

    async function updateModeIcon() {
        const isDark = document.body.classList.contains("dark-mode");
        const svgPath = isDark ? "images/light-mode-button.svg" : "images/dark-mode-button.svg";
        const svgContent = await loadSVG(svgPath);
        iconContainer.innerHTML = svgContent;
    }

    // Initialize the icon based on the current mode
    updateModeIcon();

    // Add click event listener to toggle the mode
    iconContainer.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
        updateModeIcon(); // Update the icon after toggling the mode
    });

    // Fallback for browsers that do not support classList
    if (!("classList" in document.createElement("_"))) {
        // Polyfill for classList.add and classList.remove
        (function () {
            var add = function (element, className) {
                if (!element.className.includes(className)) {
                    element.className += " " + className;
                }
            };
            var remove = function (element, className) {
                element.className = element.className.replace(
                    new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"),
                    " "
                );
            };
            document.querySelectorAll(".upper-header, .sub-header").forEach(function (element) {
                element.add = function (className) {
                    add(element, className);
                };
                element.remove = function (className) {
                    remove(element, className);
                };
            });
        })();
    }
});
