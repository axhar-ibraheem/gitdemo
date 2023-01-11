document.querySelector("#header-title").style.border = "2px solid black";
document.querySelector(".title").style.color = "green";
document.querySelector(".title").style.fontWeight = "bold";
var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";
for (let i = 0; i < items.length; i++) {
  items[i].style.fontWeight = "bold";
}
var li = document.getElementsByTagName("li");
li[4].style.color = "red";
