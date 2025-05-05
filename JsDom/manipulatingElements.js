//* create new html element
//* Syntax - let element = document.createElement(htmltags);

let div = document.createElement("div"); //* create new div element
div.innerHTML = `<p>This is a div created using document.createElement</p>`; //* add html snippet to div
document.body.appendChild(div); //* attach div to the document

//* Add id to the div element
div.id = "divId";

//* Add class to the div element
div.className = "divClass";

//* Add text to div element - use innerHTML, textContent, innerText, createTextNode or create a new Text node and append it to the div
let div2 = document.createElement("div");
div2.id = "divId";
div2.className = "divClass";

//* create new text node and add it to div
let text = document.createTextNode("This is a text created using document.createTextNode");
div2.appendChild(text); //* add text to the div

//* attach div to document
document.body.appendChild(div2);

//* add element to the div
let div3 = document.createElement("div");
div3.id = "divId";
div3.className = "divClass";
//* create new heading and add it to the div
let h4 = document.createElement("h4");
h4.innerHTML = "This is a heading created using document.createElement";
div3.appendChild(h4);
//* attach div to document
document.body.appendChild(div3);

//* add li elements to the ul
let li = document.createElement("li");
li.textContent = "About"
menu.appendChild(li);

li = document.createElement("li");
li.textContent = "Product";
menu.appendChild(li);

//* APPENDCHILD METHOD - add a node to the end of the list of child nodes of a specified parent node.
//* Syntax - parentnode.appendChild(childNode); 
//* childNode is the node to append to the given parent node.
function createMenuItem(name) {
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}
//* get the ul #main
let main = document.querySelector("#main");
//* add menu items
main.appendChild(createMenuItem("About"));
main.appendChild(createMenuItem("Product"));
main.appendChild(createMenuItem("Contact"));

//* innerHTML - use to get or set an HTML markup contained in the element

//* Reading innerHTML property
//* syntax - let content = element.innerHTML;

//* before method() - allows you to insert one or more nodes before the element
//* syntax - element.before(node); eg p.before (h1);
const p = document.querySelector("p");
const h3 = document.createElement("h3");
h3.textContent = "This is a heading created using before() method";
p.before(h3); //* insert h3 before p

//* after method() - allows you to insert one or more nodes after the element
//* Syntax - element.after(node); eg h2.after(p)

const h5 = document.querySelector("h1");
let p2 = document.createElement("p");
p2.textContent = "This is a paragraph created using after() method";
h5.after(p2); //* insert p after h5

//* insertAdjacentHTML - parses a piece of HTML text and inserts the resulting nodes into the DOM tree at a specified position
//* Syntax - element.insertAdjacentHTML(positionName, text);
let list = document.querySelector("#list");
list.insertAdjacentHTML("beforebegin", "<h4>Web Technologies</h4>");
list.insertAdjacentHTML("afterbegin", "<li>HTML</li>");
list.insertAdjacentHTML("beforeend", "<li>JavaScripts</li>");
list.insertAdjacentHTML("afterend", "<p>Frameworks for front-end developer</p>");

//* Replace child method() - replace an old HTML element with a new one
//* Syntx - parentNode.replaceChild(newChild, oldChild);
let menuElement = document.querySelector("#menu-element");
//* create new node element
let li2 = document.createElement("li");
li2.textContent = "Home";
//* replace the first list items
menuElement.replaceChild(li2, menuElement.firstElementChild);

//* remove child method() - remove a child node from a parent node
//* syntax - let childNode = parentNode.removeChild(childNode);
menuElement.removeChild(menuElement.lastElementChild);

//* append method() - insert a set of Node objects or DOMString objects after the last child of a parent node
//* syntax - parentnode.append(node)
let app = document.querySelector('#app');

let langs = ['TypeScript','HTML','CSS'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.append(...nodes);

//* preappend -  inserts Node objects or DOMString objects before the first child of a parent node
//* syntax - parentNode.prepend(...nodes);
