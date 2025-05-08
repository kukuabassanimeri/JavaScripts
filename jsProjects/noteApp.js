//* Declare Variables
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let note = document.querySelectorAll(".input-box"); //* select all notes

//* function to show notes
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//* store notes function
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//* function to create notes
createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box"; //* add class name in input box
  inputBox.setAttribute("contenteditable", "true"); //* enable editing
  img.src = "media/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img); //* display input box in notescontainer and img in input box
});

//* delete note function
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    //* confirm before deleting task
    if (confirm ("Are you sure you want to delete this task?")){
        e.target.parentElement.remove(); //* remove parent element of img
        updateStorage();
    }
  }
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateStorage();
      }
    })
  }
});

//* keydown event function
document.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});