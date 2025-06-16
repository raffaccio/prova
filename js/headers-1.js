document.addEventListener("DOMContentLoaded", function () {
    const upperHeader = document.querySelector(".upper-header");
    const subHeader = document.querySelector(".sub-header");
    let lastScrollTop = 0;
    const upperHeaderHeight = upperHeader.offsetHeight;

    window.addEventListener("scroll", function () {
        const scrollTop = window.pageYOffset || 
        document.documentElement.scrollTop;

        // Nascondi upper-header se si scrolla verso il basso
        if (scrollTop > lastScrollTop && scrollTop > upperHeaderHeight) {
            upperHeader.style.display = "none";
        } else if (scrollTop < lastScrollTop && scrollTop < 
            upperHeaderHeight) {
            upperHeader.style.display = "flex";
        }

        // Blocca sub-header in alto
        if (scrollTop >= upperHeaderHeight) {
            subHeader.classList.add("sticky");
            document.body.classList.add("sub-header-fixed");
        } else {
            subHeader.classList.remove("sticky");
            document.body.classList.remove("sub-header-fixed");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
// This code listens for the DOMContentLoaded event to ensure the DOM is fully loaded before executing.
// It manages the visibility of the upper header based on scroll direction and fixes the sub-header at the top when scrolled past a certain point.