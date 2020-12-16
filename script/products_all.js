
//GLOBAL
let clr_icon = "";
let prod = "";


//ADD ALL PRODUCTS TO THE SITE
const addObjects = (array) => {
    
    let html ="";

    //Gå gjennom hele produktlista og opprett HTML
    for (let i = 0; i < array.length; i++) {

        //Forbered innsetting av riktig farge på produktvisningen
        let farger = array[i].color;
        let fargeString = (drawColors(farger));

        html += `
        <article id="${array[i].id}"class="product box">
        <div class="img_wrap">
            <img id=img_${i} class="product_img" src="${array[i].url[0]}" alt="Foto av ${array[i].cathegory_main} med produktnavn ${array[i].name}" onmouseover="this.src='${array[i].url[1]}'" onmouseout="this.src='${array[i].url[0]}'">
        </div>
            <h4 id="${array[i].id}" class="prod_h4">${array[i].name}</h4>
        <h4 class="price">${array[i].price},-</h4>
        <article class="clr_icon colorWrap" id="colorWrap">      
        `+ fargeString + `
        </article>
        <article id="buttonWrap">
            <button id="btn_${array[i].id}" class="btn_submit">Les mer</button>
        </article>
        </article>
        `;             
    }

    document.getElementById("products-grid").innerHTML = html;
}

addObjects(products);
