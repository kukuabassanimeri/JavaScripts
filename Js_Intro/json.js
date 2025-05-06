//* JSON - JavaScript Object Notation
//* use to send and receive data

const myObj = {
  name: "Rahul",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello Rahul");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

//* Convert JavaScript objects to JSON text 
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON); //* JSON doesnot send functions
console.log(typeof sendJSON);

//* Convert JSON text to JavaScript Objects
const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);

console.log(typeof receiveJSON);

//* WEB STORAGE API - refers to window API
const myArray = ["eat", "sleep", "code"];

const myObject = {
  name: "Rahul",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

//* Session Storage - store temporary data
sessionStorage.setItem("mySessionStore", myArray);

sessionStorage.setItem("mySessionStore", JSON.stringify(myObject)); //* convert to JSON string
//*const mySessionData = sessionStorage.getItem("mySessionStore");

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); //* Convert to JavaScript objects

console.log(mySessionData);
console.log(typeof mySessionData);

//* local Storage - store persistent data
localStorage.setItem("myLocalStore", JSON.stringify(myArray));

//* remove item method 
localStorage.removeItem("myLocalStore"); //* remove the data
localStorage.clear() //* clear out everything
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));

console.log(myLocalData);

//* Higher Order Functions - does at least one of the following
//* Takes one or more functions as an argument or return a function as result

//* forEach - executes a function on each array element but does not return a new array
import {posts } from "./JsObjects.js";
posts.forEach((post) => {
    console.log(post);
});

//* filter - creates a new array containing only elements that pass a test
const filteredPost = posts.filter((post) => {
    return post.userId === 1;
});
console.log(filteredPost);

//* map - creates a new array by applying a function to each element of an existing array
const mappedPost = filteredPost.map((post) => {
    return post.id * 10;
});
console.log(mappedPost);

//* reduce - reduce the values by getting the total
const reducedPost = mappedPost.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPost);