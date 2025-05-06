//* Modules 
import playGuitar from "./jsmodule.js";
console.log(playGuitar());

//* import named exports
import { shredding, plucking } from "./jsmodule.js";

//* rename the imported functions
import { shredding as shred, plucking as pluck } from "./jsmodule.js";
console.log(shredding());
console.log(plucking());

//* import all
import * as Guitar from "./jsmodule.js";
console.log(Guitar.shredding());

//* exporting class
import User from "./JsClasses.js";
//* create instance of class
const me = new User("XXXXXXXXXXXXXXX", "Abass");
console.log(me.greeting());
console.log(me);

//* JavaScript cookies - small text file stored on your computer used to remember information about user. saved in name=value pairs

//* check cookies'
console.log(navigator.cookieEnabled);

//* add cookie
document.cookie = "firstName=Abass; expires=Tue, 6 May 2025 12:00:00 UTC; path=/";
document.cookie = "lastName=Kuku; expires=Tue, 6 May 2025 12:00:00 UTC; path=/";
console.log(document.cookie);

//* function to create cookie
function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}
setCookie("email", "cookie@gmail.com", 365);
console.log(document.cookie);

//* function to delete cookie
function deleteCookie(name) {
  setCookie(name, null, null);
}
deleteCookie("email");


console.log(document.cookie);

//* function to get value of cookie by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split("; "); //* return array
  let result = null;

  cookieArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
}
console.log(getCookie("lastName"));

const firstText = document.querySelector("#firstName");
const lastText = document.querySelector("#lastName");
const btnSubmit = document.querySelector("#btnSubmit");
const btncookie = document.querySelector("#btncookie");

btnSubmit.addEventListener("click", () => {
  setCookie("firstName", firstText.value, 365);
  setCookie("lastName", lastText.value, 365);
  alert("Cookies saved");
});

btncookie.addEventListener("click", () => {
  firstText.value = getCookie("firstName");
  lastText.value = getCookie("lastName");
  alert("Cookies loaded");
});