
import nav from"../components/nav.js"

document.getElementById("nav").innerHTML = nav();


let cart=JSON.parse(localStorage.getItem("cart"))||[]
let totalprice=0;
for(let i=0;i<createImageBitmap.length;i++){
    totalprice += cart[i].price * cart[i].qty
}

console.log(cart);

document.getElementById("price").innerHTML=`Total ${totalprice}$`
