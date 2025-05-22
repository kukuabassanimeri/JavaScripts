const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;

    arrow.addEventListener("click", () => {
        clickCounter++;
        const movieList = movieLists[i];
        
        //* Get the current transformation value correctly
        const currentTransform = window.getComputedStyle(movieList).transform;
        const translateX = currentTransform.includes("matrix") ? parseFloat(currentTransform.split(",")[4]) : 0;

        if (itemNumber - (4 + clickCounter) >= 0) {
            movieList.style.transform = `translateX(${translateX - 300}px)`;
        } else {
            movieList.style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

//* Toggle the theme
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.nav-bar,.nav-bar-container,.side-bar,.left-menu-icon,.toggle"
);
ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});
