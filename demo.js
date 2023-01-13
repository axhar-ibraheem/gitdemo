var form = document.getElementById("my-form");
var list = document.getElementById("users");
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
  var nameTextNode = document.createTextNode(name.value);
  var emailTextNode = document.createTextNode(` - ${email.value}`);
  var phoneTextNode = document.createTextNode(` - ${phone.value}`);
  li.append(nameTextNode, emailTextNode, phoneTextNode);
  list.appendChild(li);
}
