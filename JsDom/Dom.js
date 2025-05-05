//* DOM - standard for accessing documents while HTML DOM is a standard object model and programming interface for HTML. 

//* HTML DOM METHODS -  actions perform on HTML Elements.
//* HTML DOM properties - values that you can set or change.

//* getElementById() - returns an HTML element with the specified id
//* const element = document.getElementById(id); id is string that represents the id of the element
document.getElementById("p1").innerHTML ="Hello, world!, Welcome to JavaScript DOM";

//* The innerHTML Property - used to get or change any HTML element

//* getElementByName() - get elements with a given name in a document
//* let elements = document.getElementsByName(name); name is the value of the name attribute of element and returns live nodeList
let elements = document.getElementsByName("fname");
document.getElementById("p2").innerHTML = elements[0].tagName;

//* getElementByTagName - elect elements with a given tag name
//* let elements = document.getElementsByTagName(tagName); returns live HTMLCollection
const tagName = document.getElementsByTagName("p");
document.getElementById("p3").innerHTML = "The text in first paragraph is: " + tagName[4].innerHTML;

//* getElementByClassName - returns elements whose class names match one or more specified class names
//* getElementsByClassName(names) names is the classname
const myElement = document.getElementsByClassName("dom");
document.getElementById("p4").innerHTML = "The first class name paragraph is: " + myElement[1].innerHTML;

//* querySelector() - allows you to select the first element that matches one or more CSS selectors.
//* let element = parentNode.querySelector(selector);
//* querySelectorAll() - select all elements that match a CSS selector or a group of CSS selectors. 
//* let elementList = parentNode.querySelectorAll(selector);
const q = document.querySelectorAll(".qSelector");
document.getElementById("p5").innerHTML = "The first paragraph in querySelector is: " + q[1].innerHTML;

//* Basic selectors
//* universal selector * - selects the first element in the document. let element = document.querySelector('*');
//* Type selector - select elements by node name. let firstHeading = document.querySelector('h1');
//* Class selector - select elements by css className. let firstClass = document.querySelector('.className)
//* ID selector # - select elements based on the value of its id. let firstClass = document.querySelect("#idName")
//* Attribute selector - select elements based on given attribute value. let firstClass = document.querySelect("[attr.name]")

//* grouping selector - group multiple selectors using comma. let firstClass = document.querySelect("h1, h2, h3");
//* Descendent selector - find desecendent elements. let firstClass = document.querySelect("h1 h2"); 

//* Child selector > - select direct children. let firstClass = document.querySelect("h1 > p");
//* general sibling selector ~ - selects siblings that share the same parent. let links = document.querySelectorAll('p ~ a');

//* Adjacent sibling selector + - selects the sibling element that immediately follows the previous sibling. let nextSibling = document.querySelector('p + a');
//* pseudo class selector : - let listItem = document.querySelectorAll('li:nth-child(2)');

//* TRAVESING ELEMENTS
//* PARENTNODE - Is read only element

//* Getting parent node
let parent = node.parentNode;

//* The Document and DocumentFragment nodes do not have a parent hence null parentNode
let  note = document.querySelector(".node");
console.log(note.parentNode);   

//* Javascripts siblings

//* get next sibling element
let nextSibling = currentNode.nextElementSibling;

let current = document.querySelector(".current");
let next = current.nextElementSibling;
console.log(next);

//* get previous siblings
let prevsibling = currentNode.previousElementSibling;
let prev = current.previousElementSibling;
console.log(prev);

//* Get first child element
let firstChild = parentElement.firstChild;

let content = document.getElementById("menu");
let first = content.firstChild.nodeName;
console.log(first);

//* or use
let firstElementChild = parentElement.firstElementChild;

//* Get last child element
//*Syntax - let lastChild = parentElement.lastChild; or parentElement.lastElementChild;
let menu = document.getElementById("menu");
let last = menu.lastElementChild;

//* get all child elements
//* Syntax - let children = parentElement.childNodes; or let children = parentElement.children;
let menuChild = document.getElementById('menu');
let children = menuChild.children;
console.log(children);