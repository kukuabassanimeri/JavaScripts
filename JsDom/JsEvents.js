//* An event - an action that the web browser can detect and respond to, like a mouse click.

//* Event handling using normal function
let btn = document.querySelector("#btn");
function handleClick() {
    alert("The button was Click");
}
btn.addEventListener("click", handleClick);

//* Event handling using anonymous function
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
    alert("The button was Click");
});

//* Event handling using arrow function
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
    alert("The button was Click");
});

//* RemoveEventListener method - removes the event that was added. pass the same arguments that were added
btn.removeEventListener("click", handleClick);