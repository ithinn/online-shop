const input = document.getElementById("inp_search");
const val = input.value;

//FINN PRODUKTENE BASERT PÅ INPUT-FELTETS VERDI
const findProducts = (product, name) => {
    
    const productReturned = product.filter(el => {
        return el.cathegory_main.toLowerCase() === name.toLowerCase() || el.name.toLowerCase() === name.toLowerCase() || el.cathegory_under.toLowerCase() === name.toLowerCase(); 
        
    })
    addObjects(productReturned);
    addEventButton();
    return productReturned
}

//KALLER FIND PRODUCTS(?) OG LEGGER INN INPUT.VALUE SOM ARGUMENT
const inputValueInn = () => {
    console.log(findProducts(products, input.value));
}

//Lytter for search-input
input.addEventListener("keyup", inputValueInn); 


//BLA GJENNOM DE ULIKE SØKEORDENE I SØK-FELTET
const søkeord = ["jakker", "bukser", "regnbukse", "skalljakke", "overtrekksbukse", "fleece"];
let i = 0;

const settPlaceholder = () => {
    
    if(i >=søkeord.length) {
        i = 0;
    }
    
    const ord = søkeord[i];
    input.placeholder = 'Søk etter ' + ord;
    i++;
}

settPlaceholder();
setInterval(settPlaceholder, 3000);