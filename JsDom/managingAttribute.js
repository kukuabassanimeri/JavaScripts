//* Set attributes method -  set the value of an attribute on a specified element
//* Syntax - element.setAttribute(name, value);
let btnSend = document.querySelector('#btnSend');
if( btnSend ){
    btnSend.setAttribute('name', 'send');
    btnSend.setAttribute('disabled', '');

}

//* Get attribute method - get the value of a specified attribute on an element
//* Synatx - let value = element.getAttribute(name);
let link = document.querySelector('#js');
if (link){
    let target = link.getAttribute('target');
    console.log(target);

    link.removeAttribute("target"); //* remove attribute method

}

//* remove attribute method -  remove the attribute with the specified name from an element.
//* syntax - element.removeAttribute(name);

//* has attribute method - check if an element has an attribute
//* syntax - let result = element.hasAttribute(name);
let btn = document.querySelector('#btnSend');
if (btn){
    let result = btn.hasAttribute('disabled');
    console.log(result);
}
