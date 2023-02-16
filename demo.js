var form = document.getElementById("my-form");
var list = document.getElementById("users");
 
form.addEventListener("submit", submitForm);

function submitForm(e) {

  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const userDetails = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };
  
  axios.post("https://crudcrud.com/api/fa6ed1c346604722ad845f3eab545f9d/appointmentData", userDetails).then((res)=>{
    
    console.log(res.data)
  }).catch(err=>console.log(err))
  showUserOnScreen(userDetails)
}
 
//showing the users on the UI.

function showUserOnScreen(userDetails){

  const li = document.createElement("li");
  li.className = "item";
  const nameTextNode = document.createTextNode(`${userDetails.name} - `);
  const emailTextNode = document.createTextNode(userDetails.email);
  const phoneTextNode = document.createTextNode(` - ${userDetails.phone} `);

  li.append(nameTextNode, emailTextNode, phoneTextNode);
  ///adding edit and delete buttons
  const delButton = document.createElement("button");
  const editButton = document.createElement("button");
  delButton.classList.add("button", "delete")
  editButton.classList.add("button", "edit")
  editButton.style.marginLeft = "5px";
  const editButtonNode = document.createTextNode("Edit");
  const delButtonNode = document.createTextNode("delete");
  delButton.appendChild(delButtonNode);
  editButton.appendChild(editButtonNode);
  li.append(delButton, editButton);
  list.appendChild(li);
}

// function to remove user from ui and .
list.addEventListener("click", deleteUser);
function deleteUser(e) {
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    list.removeChild(li);
  }
} //

//edit user functionality
// list.addEventListener("click", editUser);
// function editUser(e) {
//   if (e.target.classList.contains("edit")) {
//     var li = e.target.parentElement;
//     var email = li.childNodes[1].nodeValue;
//     var obj = JSON.parse(localStorage.getItem(email));
//     document.getElementById("name").value = obj.name;
//     document.getElementById("email").value = obj.email;
//     document.getElementById("phone").value = obj.phone;
//     list.removeChild(li);
//     localStorage.removeItem(obj.email);
//   }
// }
