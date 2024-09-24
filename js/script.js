(function () {
    const timeline = document.querySelector(".timeline ol");
    const items = document.querySelectorAll(".timeline ol li");
    const elH = document.querySelectorAll(".timeline li > div");

    // START
    window.addEventListener("load", init);

    function init() {
        setEqualHeights(elH);
        animateTileOnScroll();
        window.addEventListener("resize", setEqualHeights.bind(null, elH));
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            const singleHeight = el[i].offsetHeight;
            if (counter < singleHeight) {
                counter = singleHeight;
            }
        }

        for (let i = 0; i < el.length; i++) {
            el[i].style.height = `${counter}px`;
        }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // ANIMATE TIMELINE ON SCROLL
    function animateTileOnScroll() {
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add("in-view");
            }
        });
    }

    // LISTEN FOR SCROLL
    window.addEventListener("scroll", animateTileOnScroll);
})();