var form = document.getElementById("my-form");
var list = document.getElementById("users");
//function to add users to ui and local storage
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var userDetails = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };
  var userDetailsString = JSON.stringify(userDetails);
  localStorage.setItem(`${email.value}`, userDetailsString);
  var li = document.createElement("li");
  li.className = "item";
  var nameTextNode = document.createTextNode(`${name.value}- `);
  var emailTextNode = document.createTextNode(email.value);
  var phoneTextNode = document.createTextNode(` -${phone.value} `);
  li.append(nameTextNode, emailTextNode, phoneTextNode);
  var delButton = document.createElement("button");
  delButton.style.color = "black";
  delButton.style.background = "lightgray";
  delButton.className = "delete";
  delButton.appendChild(document.createTextNode("delete"));
  li.appendChild(delButton);
  list.appendChild(li);
}
//function to remove user from ui and local storage.
list.addEventListener("click", deleteUser);
function deleteUser(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    localStorage.removeItem(li.childNodes[1].nodeValue);
    list.removeChild(li);
  }
}
