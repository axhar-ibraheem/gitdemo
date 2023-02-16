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
  
  axios.post("https://crudcrud.com/api/29e1057ec36f49b4b38aca07ab11cdcc/appointmentData", userDetails).then((res)=>{
  showUserOnScreen(res.data)
  }).catch(err=>console.log(err))
}

window.addEventListener("DOMContentLoaded",()=>{
  axios.get("https://crudcrud.com/api/29e1057ec36f49b4b38aca07ab11cdcc/appointmentData").then((res)=>{
     for(let i=0;i<res.data.length;i++){
      showUserOnScreen(res.data[i])
     }
  }).catch(err=>{
    console.log(err)
  })
})

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

  delButton.addEventListener("click",()=>{
    axios.delete(`https://crudcrud.com/api/29e1057ec36f49b4b38aca07ab11cdcc/appointmentData/${userDetails._id}`).then(()=>{
      list.removeChild(li)
    }).catch(e => console.log(e))
  })
}
//   delButton.onclick = () => {
//     deleteUser(`${userDetails._id}`)
//   }

//   function deleteUser(userId){
//     axios.delete(`https://crudcrud.com/api/29e1057ec36f49b4b38aca07ab11cdcc/appointmentData/${userId}`).then(()=>{
//       list.removeChild(li)
//     }).catch(e => console.log(e))
//   }
// }




 

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
