import nav from "../components/nav.js";

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("sign"));
  
    console.log(user);
  
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
  
    if (email == user.email && password == user.password) {
      alert("logged in");
      
      window.location.href = "website/index.html";
    } else {
      alert("Invalid");
    }
  });

document.getElementById("nav").innerHTML = nav();
