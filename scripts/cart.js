
import nav from"../components/nav.js"

document.getElementById("nav").innerHTML = nav();


let cart=JSON.parse(localStorage.getItem("cart"))||[]



// let show =(value)=>{
    //  console.log(value);
    //  document.getElementById("cartpage").innerHTML="";
     cart.map((ele,index)=>{
        let div=document.createElement("div")
        let head=document.createElement("h3");
        head.innerHTML="it's your shopping cart"
        let image=document.createElement("img")
        image.src=ele.image
        let title = document.createElement("h3");
        title.innerHTML = ele.title;
        let price = document.createElement("p");
        price.innerHTML = `${ele.price*10}$`;
        price.setAttribute("class","price")
        let btn1=document.createElement("button");
        btn1.innerHTML="-";
        btn1.addEventListener("click", () => {
         // cart.splice(index, 1)
         
         // if(qty==0){
         //    event.target.parentNode.remove()
         // }
            cart[index].qty -= 1;
         localStorage.setItem("cart", JSON.stringify(cart));
         window.location.reload()
       })
        let noq=document.createElement("span");
        noq.innerHTML=ele.qty;
        let btn2=document.createElement("button");
        btn2.innerHTML="+";
        btn2.addEventListener("click", () => {
         // cart.splice(index, 1)
            cart[index].qty += 1;
         localStorage.setItem("cart", JSON.stringify(cart));
         window.location.reload()
       })
        div.append(image,title,price,btn1,noq,btn2);
        document.getElementById("cartpage").append(div)
     })
// }


// function addItem(){
//     let clrNode = document.getElementById("cartpage");
//       clrNode.innerHTML=""
//   }

//   value.map((cart)=>{
//     let cartcount=document.getElementById("cart-page")
//   })



// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((value) => show(value));





// let totalprice=0;
// for(let i=0;i<createImageBitmap.length;i++){
//     totalprice += cart[i].price * cart[i].qty
// }

console.log(cart);

document.getElementById("price").innerHTML=`Total ${totalprice}$`
