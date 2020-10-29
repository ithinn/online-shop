const cart_icon = document.getElementById("cart");
let handlekurv = document.getElementById("cart_section");
let overlay = document.getElementById("overlay");
let remove = document.getElementById("removeCart");


//VISER HANDLEKURVEN
const seeCart = () => {
   
        handlekurv.style.display = "block";
        handlekurv.style.right = "0";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        overlay.style.zIndex = "0";
}
    
//------------------------------------------------------------    

//SKJULER HANDLEKURVEN
const hideCart = () => {
    handlekurv.style.display = "none";
    handlekurv.style.display = "none";
    overlay.style.zIndex = "-1";
}


//Legger til lyttere
cart_icon.addEventListener("click", seeCart);
remove.addEventListener("click", hideCart);
