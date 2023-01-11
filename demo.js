document.querySelector("#header-title").style.border = "2px solid black";
document.querySelector(".title").style.color = "green";
document.querySelector(".title").style.fontWeight = "bold";
var items = document.getElementsByClassName("list-group-item");

var li2 = document.querySelector("#l2");
li2.style.backgroundColor = "green";
var li3 = document.querySelector("#l3");
li3.style.display = "none";
document.querySelectorAll(".list-group-item")[1].style.color = "green";
var list = document.querySelectorAll(".list-group-item");
for (let i = 0; i < list.length; i += 2) {
  list[i].style.backgroundColor = "green";
}
