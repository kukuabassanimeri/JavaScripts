//* Declare variables
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

//* add event listener
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault(); //* prevent default scroll down or up
    scrollContainer.scrollLeft += evt.deltaY; //*
    scrollContainer.style.scrollBehavior = "auto";
});

//* next event listener
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"; //* add scroll animation
    scrollContainer.scrollLeft += 900;
});

//* back event listener
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});