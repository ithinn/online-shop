const cart_icon = document.getElementById("cart");
let handlekurv = document.getElementById("cart_section");
let overlay = document.getElementById("overlay");
let remove = document.getElementById("removeCart");


//VISER HANDLEKURVEN
const seeCart = () => {
        handlekurv.style.display = "block";
        handlekurv.style.right = "0";
        handlekurv.style.zIndex = "5";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        overlay.style.zIndex = "1";   
}

const seeCartKey = e => {
    if (e.key === "Enter") {
        console.log("Enter er preset");
        seeCart();
    }
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
cart_icon.addEventListener("keyDown", (e) => {
    seeCartKey;
});
remove.addEventListener("click", hideCart);
