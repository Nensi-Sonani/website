import nav from "../components/nav.js";

document.getElementById("sign-up").addEventListener("submit",function(e){
    e.preventDefault();
    let user={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("pass").value,
      cpassword:document.getElementById("cpass").value,
  }
  localStorage.setItem("sign",JSON.stringify(user));
  console.log(user);
 });

document.getElementById("nav").innerHTML = nav();
