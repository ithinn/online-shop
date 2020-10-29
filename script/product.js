//Global
let popUp = document.querySelector("#grid-container");
let fjern = "";
let colorSelected;

let sizeSelected;
let clrChosen;
//---------------------------------------------------------------------------- 

//OPPRETT POPUP-VINDU MED DETALJVISNING

const seePopUp = (evt) => {
    
    let id = evt.target.id;
   
    popUp.style.opacity = "1";
    popUp.style.right = "10%";
    popUp.style.top = "30em";
    overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    overlay.style.zIndex = "0";

    let html="";
    let fargesymbol = "";
    let størrelser = "";
    let buyThis = "";

    //Finner produktets id og henter ut kun tallet
    let prodId = Number(id.slice(-1));
    
    //Går gjennom produktlista 
    products.forEach(e => {

        let farger = e.color;
        let str = e.size;

        //Oppretter HTML i popupvinduet hvis produkt-iden er den samme som knappens id
        if(prodId == e.id) {
           
            html += `
            <div id="column1">
            <article id="main_container">
                <img id="main_img" alt="Foto av ${e.cathegory_main} med produktnavn ${e.name}" src=${e.url[0]}>
                <div id="arrows">
                    <img id="arrow_l" src="../images/icons/arrow_left.png">
                    <img id="arrow_r" src="../images/icons/arrow_right.png">
                </div>    
            </article>
        
            <article id="thumb_container">
                <img class="thumb_img" alt="Foto av ${e.cathegory_main} med produktnavn ${e.name}" id="thumb1" src=${e.url[1]}>
                <img class="thumb_img" alt="Foto av ${e.cathegory_main} med produktnavn ${e.name}" id="thumb2" src=${e.url[2]}>
                
            </article>
        </div>

        
        
        <div id="column2">
        <img src="../images/icons/x.png" class="remove_popup icon" id="det_remove">
            
            <article id="description">
                <h1 id="product_heading">${e.name}</h1>
                <p id="ingress">${e.ingress}</p>
                <h2 id="price">${e.price},- </h2>
            </article>
            
            <div class="box" id="details">
            <article id="clr_details"></article>
            <article id="size_details"></article>
            <article id="buy"></article>
            </div>
        </div>
            `;
            
        //legger inn fargeoverskrift og fargesymboler
        fargesymbol = `<h3 class="pH3" id="color_heading">Velg farge</h3>
                    <div class="clr_wrap">`
        farger.forEach ((el, i) => {
            fargesymbol += 
            `
            <input id="colorButton${i}" type="radio" name="chooseClr">
            <label class="clr_radio clr_large" data-colorcode="${el}" for="colorButton${i}" style="background-color: ${el}; color: #ffffff;">${hexToClr(el)}</label>
            `;
        })
            
        //legger inn størrelsesoverskrift og størrelsestagger
        størrelser = `<h3 class="pH3" id="sizeTags">Velg størrelse</h3>
                    <div class="size_wrap">` 
        str.forEach((el, i) => {
            størrelser += `
            <input type="radio" id="size_${i}" name="chooseSize">
            <label class="size_tag" data-size="${el}" for="size_${i}">${el}</label>
            `;
        }) 
        
        //legger inn Kjøp nå-knapp
        buyThis = `
        <div class="alert"></div>
        <button id="btn_${id}" class="buyThis">Kjøp nå</button>
        `;
        }        
    })

    popUp.innerHTML = html;

    //Viser farger, størrelser og kjøp-knapp i html-en
    clr_details.innerHTML = fargesymbol;
    size_details.innerHTML = størrelser;
    buy.innerHTML = buyThis;
    
    //Lytter for kjøp-knappen
    let btnId = "btn_" + id;
    let buyButton = document.getElementById(btnId);
    buyButton.addEventListener("click", addToCart);

    //Lytter for farge-knappene
    let clr_radio = document.querySelectorAll(".clr_radio");
    for (const c of clr_radio) {
        c.addEventListener("click", getColorFromButton);
    }

    //Lytter for størrelsesknappene
    let sizeButtons = document.querySelectorAll(".size_tag")
    for (const s of sizeButtons) {
        s.addEventListener("click", getSizeFromButton);
    }

    //Lytter for fjern-popup
    fjern = document.getElementById("det_remove");
    fjern.addEventListener("click", removePopUp);
    addEventButton();   
}

//-----------------------------------------------------------------------------

//FJERNER POPUP-VINDU
const removePopUp = () => {
        popUp.style.opacity = ".5";
        popUp.style.right = "200em";
        popUp.style.top = "30em";
        overlay.style.zIndex = "-1"
}

//------------------------------------------------------------------------------
//HENTER FARGEN BRUKEREN HAR VALGT OG SENDER DEN TIL HANDLEKURVEN(?)
const getColorFromButton = (evt) => {
    
    colorSelected = hexToClr(evt.target.dataset.colorcode);
    return hexToClr(evt.target.value);
}

//---------------------------------------------------------------------------------

//HENTER STØRRELSEN BRUKEREN HAR VALGT OG SENDER DEN TIL HANDLEKURVEN(?)
const getSizeFromButton = (evt) => {
  
    sizeSelected = evt.target.dataset.size;
    return sizeSelected;
}

//LEGG TIL FARGER I POPUP-VINDUETS FARGESYMBOLER
const drawColors = (array) => {
    let fargesymboler = "";
    for (let i = 0; i<array.length; i++) {
        fargesymboler += `
        <div class="clr_small" style="background-color: ${array[i]}; border: none"></div>
        `
    }
    return fargesymboler;
}
