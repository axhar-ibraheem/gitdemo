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
  var nameTextNode = document.createTextNode(`${name.value} - `);
  var emailTextNode = document.createTextNode(email.value);
  var phoneTextNode = document.createTextNode(` - ${phone.value} `);
  li.append(nameTextNode, emailTextNode, phoneTextNode);
  ///adding edit and delete buttons
  var delButton = document.createElement("button");
  var editButton = document.createElement("button");
  delButton.style.color = "black";
  delButton.style.background = "lightbrown";
  editButton.style.color = "black";
  editButton.style.background = "lightbrown";
  editButton.style.marginLeft = "5px";
  delButton.className = "delete";
  editButton.className = "edit";
  var editButtonNode = document.createTextNode("Edit");
  var delButtonNode = document.createTextNode("delete");
  delButton.appendChild(delButtonNode);
  editButton.appendChild(editButtonNode);
  li.append(delButton, editButton);
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
} //

//edit user functionality
list.addEventListener("click", editUser);
function editUser(e) {
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    var email = li.childNodes[1].nodeValue;
    var obj = JSON.parse(localStorage.getItem(email));
    document.getElementById("name").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.phone;
    list.removeChild(li);
    localStorage.removeItem(obj.email);
  }
}
