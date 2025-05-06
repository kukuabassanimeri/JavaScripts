//* Declare variables
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//* Define add Function
function addTask() {
    if (inputBox.value === '') { //* check if input box is empty
        alert("You must add task!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //* add input value
        listContainer.appendChild(li); //* append to li

        //* create cross for deleting tasks
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //* clear input field after task is added
    saveData(); //* whenever task is added, it should store it
}

//* click function
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { //* check if clicked element is a list item
        e.target.classList.toggle("checked"); //* toggle checked class
        saveData();

    } else if (e.target.tagName === "SPAN") { //* check if clicked element is a span
        //* confirm before removing task
        if (confirm ("Are you sure you want to delete this task?")){
            e.target.parentElement.remove(); //* remove parent element (list item)
            saveData();
        }
        
    }
}, false);

//* store data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); //* store list container HTML
}

//* display data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); //* retrieve stored data
}

showTask(); //* call showTask function to display stored data on page load