var form = document.getElementById("my-form");
form.addEventListener("submit", submitForm);
function submitForm(e) {
  e.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var userDetails = {
    name: name.value,
    email: email.value,
  };
  var userDetailsString = JSON.stringify(userDetails);
  console.log(userDetailsString);
  localStorage.setItem(`userDetails:${name.value}`, userDetailsString);
}
