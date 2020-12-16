const input = document.getElementById("inp_search");

const search = e => {
    let mySearch = e.target.value.toLowerCase();

    let mySearchArr = products.filter((el) => {
        return el.cathegory_main.toLowerCase().includes(mySearch) || el.cathegory_under.toLowerCase().includes(mySearch) || el.name.toLowerCase().includes(mySearch);
    })

    addObjects(mySearchArr);
    addEventButton();
}

input.addEventListener("keyup", search);


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