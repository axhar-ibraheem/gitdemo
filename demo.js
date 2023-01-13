// var list = document.querySelector("#items");
// //parentNode
// console.log(list.parentNode);
// list.parentNode.style.backgroundColor = "lightgrey";
// console.log(list.parentNode.parentNode);
// //childNode
// console.log(list.childNodes);
// console.log(list.childNodes.length);
// //childern
// console.log(list.children, list.children.length);
// //firstChild
// console.log(list.firstChild);
// //firstElementChild
// console.log(list.firstElementChild);
// //lastChild
// console.log(list.lastChild);
// console.log(list.lastElementChild);
// //siblings
// console.log(list.nextSibling, list.previousSibling);
// list.previousElementSibling.style.color = "brown";
//creating elements
// var newDiv = document.createElement("div");
// console.log(newDiv);
// newDiv.className = "hello";
// newDiv.id = "id";
// newDiv.setAttribute("title", "hello world");
// newDiv.setAttribute("value", "ignore");
// var text = document.createTextNode("hello");
// newDiv.appendChild(text);
// //inserting the text
// var container = document.querySelector("header .container");
// var h1 = document.querySelector(".container h1");
// container.insertBefore(newDiv, h1);
// var newDiv2 = document.createElement("div");
// var t = document.createTextNode("Hello");
// newDiv2.appendChild(t);
// console.log(newDiv2);
// var ul = document.querySelector(".list-group");
// var item1 = document.querySelector(".list-group-item");
// ul.insertBefore(newDiv2, item1);
var form = document.getElementById("addForm");
var list = document.getElementById("items");

form.addEventListener("submit", function addItem(e) {
  e.preventDefault();
  var newItem = document.getElementById("item").value;
  var name = document.getElementById("item2").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  var newItemNode = document.createTextNode(newItem);
  var nameNode = document.createTextNode(` ${name}`);
  li.append(newItemNode, nameNode);
  var delButton = document.createElement("button");
  delButton.className = "btn btn-danger btn-sm float-right delete ml-1";
  delButton.appendChild(document.createTextNode("X"));
  var editButton = document.createElement("button");
  editButton.className = "btn btn-dark btn-sm float-right";
  editButton.appendChild(document.createTextNode("Edit"));
  li.appendChild(delButton);
  li.appendChild(editButton);
  list.appendChild(li);
});
//delete event
list.addEventListener("click", removeItem);
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
}
///adding edit button to each list item

var li = document.querySelectorAll(".list-group-item");
for (let i = 0; i < li.length; i++) {
  var editButton = document.createElement("button");
  editButton.className = "btn btn-dark btn-sm float-right";
  editButton.appendChild(document.createTextNode("Edit"));
  li[i].appendChild(editButton);
}
//filter
var filter = document.getElementById("filter");
filter.addEventListener("keyup", filterItems);
function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = list.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemNum = item.firstChild.textContent;
    var itemName = item.childNodes[1].nodeValue;
    var str = itemNum + (itemName != null ? itemName : "");
    if (str.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
