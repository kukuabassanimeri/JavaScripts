//* inline style -  set the inline style of an element
//* syntax - element.style
element.style.color = 'red'; //* set the color of element to red
//* element.style.['-webkit-text-stock'] = 'unset'; - use If the CSS property contains hyphens (-) 

//* cssText - completely override the existing inline style
//* syntax - element.style.cssText = 'color:red;background-color:yellow';

//* or use setAttribute - element.setAttribute('style','color:red;background-color:yellow');

let p = document.querySelector("#content");
p.style.color = "red";
p.style.fontWeight = "bold"

let h = document.querySelector("#heading");
h.style.cssText = "color:blue;background-color:yellow";

//* class name -  returns a space-separated list of CSS classes of the element as a string
//* syntax - element.className

//* element.className += newClassName; - add new class element to the existing class
let menu = document.querySelector('#menu');
menu.className += ' new';
console.log(menu.className);

//* in practice, use classList to add new class
let mainMenu = document.querySelector('#menu');
mainMenu.classList.add('new');
console.log(mainMenu.className);

//* completely override all the classes f an element
element.className = "class1 class2"; 

//* add multiple classes
let div = document.querySelector('#content');
div.classList.add('info','visible','block');

//* remove class - use remove()
let div1 = document.querySelector('#content');
div1.classList.remove('visible');

//* replace class of an element - use replace()
let div2 = document.querySelector('#content');
div2.classList.replace('info','warning');

//* check if an element has specified class - use contains()
let div3 = document.querySelector('#content');
div3.classList.contains('warning');

//* toggle class - removes class if present otherwise add it
let div4 = document.querySelector('#content');
div4.classList.toggle('visible');