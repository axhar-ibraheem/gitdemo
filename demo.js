var list = document.querySelector("#items");
//parentNode
console.log(list.parentNode);
list.parentNode.style.backgroundColor = "lightgrey";
console.log(list.parentNode.parentNode);
//childNode
console.log(list.childNodes);
console.log(list.childNodes.length);
//childern
console.log(list.children, list.children.length);
//firstChild
console.log(list.firstChild);
//firstElementChild
console.log(list.firstElementChild);
//lastChild
console.log(list.lastChild);
console.log(list.lastElementChild);
//siblings
console.log(list.nextSibling, list.previousSibling);
list.previousElementSibling.style.color = "brown";
//creating elements
var newDiv = document.createElement("div");
console.log(newDiv);
newDiv.className = "hello";
newDiv.id = "id";
newDiv.setAttribute("title", "hello world");
newDiv.setAttribute("value", "ignore");
var text = document.createTextNode("hello");
newDiv.appendChild(text);
//inserting the text
var container = document.querySelector("header .container");
var h1 = document.querySelector(".container h1");
container.insertBefore(newDiv, h1);
var newDiv2 = document.createElement("div");
var t = document.createTextNode("Hello");
newDiv2.appendChild(t);
console.log(newDiv2);
var ul = document.querySelector(".list-group");
var item1 = document.querySelector(".list-group-item");
ul.insertBefore(newDiv2, item1);
