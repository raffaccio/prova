
// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the upper-header and sub-header elements
    const upperHeader = document.querySelector(".upper-header");
    const subHeader = document.querySelector(".sub-header");

    // Initialize the last scroll position and the height of the upper-header
    let lastScrollTop = 0;
    const upperHeaderHeight = upperHeader.offsetHeight;

    // Add a scroll event listener to the window
    window.addEventListener("scroll", function () {
        // Get the current scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Hide the upper-header when scrolling down and show it when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > upperHeaderHeight) {
            upperHeader.classList.add("hidden");
            document.body.classList.add("upper-header-hidden");
        } else if (scrollTop < lastScrollTop && scrollTop < upperHeaderHeight) {
            upperHeader.classList.remove("hidden");
            document.body.classList.remove("upper-header-hidden");
        }

        // Fix the sub-header at the top when scrolling past the upper-header
        if (scrollTop >= upperHeaderHeight) {
            subHeader.classList.add("sticky");
            document.body.classList.add("sub-header-fixed");
        } else {
            subHeader.classList.remove("sticky");
            document.body.classList.remove("sub-header-fixed");
        }

        // Update the last scroll position
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
