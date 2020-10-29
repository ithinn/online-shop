let categoryArray = ["Jakker", "Bukser"];
let c_u_arr = ['Dunjakke', 'Skalljakke', 'Fleece', 'Regnjakke', "Overtrekksbukse", "Regnbukse", "Ullbukse" ];
let allSizes = [86, 92, 98, 104, 110, 116, 122];
let qualities = ['vannavstøtende', 'vindtett', 'vanntett', 'varm', 'strikk'];
let colors = ['#707312', '#c1272d', '#96acd9', '#333333', '#808080', "#73434b"];
const filterWrap = document.getElementById("filter_wrap");
let uniCat = [];
let mainCatArray = [];


//OPPRETTER FILTERSEKSJONEN
const viewFilters = () => {
    html = "";

    html += `
    
    <article>
        <div class="box filter_container" id="cathegory_main">
            <h3>Kategori</h3>
            <div class="filter_content" id="cat_main"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="cathegory">
            <h3>Underkategori</h3>
            <div class="filter_content" id="cat_content"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="size">
            <h3>Størrelse</h3>
            <div class="filter_content" id="size_content"></div>
            
        </div>
    </article>
    <article>
        <div class="box filter_container" id="attribute">
            <h3>Funksjon</h3>
            
            <div id="att_content"></div>
        </div>
    </article>
    <article>
        <div class="box filter_container" id="color">
            <h3>Farge</h3>
            
            <div id="color_content"></div>
        </div>
    </article>
    `;

    filterWrap.innerHTML = html;
}

viewFilters();


//ADD CATHEGORIES TO THE FILTER SECTION

const addCat = (array) => {
    let html ="";

    //Nullstill arrayet
    mainCatArray = [];
    
    //Loop gjennom argument- arrayet og finn elementer det har til felles med arrayet som inneholder alle underkategorier
    //Push disse elementene inn i catArray
    for (let i = 0; i<array.length; i++) {

        for (let j = 0; j<categoryArray.length; j++){

            if (array[i].cathegory_main === categoryArray[j]) {

                let c = array[i].cathegory_main;
                mainCatArray.push(c);
                
            }
        }
    }

    //lag nytt array med bare unike verdier
    uniCat = mainCatArray.filter(onlysizeUnique);
    
    //Vis den nye listen på siden som separate tagger
    uniCat.forEach((el, i) => {                
        html += `
                <button data-active="true" id=${el} class="tag cat_main" value="unchecked" type="checkbox">
                 ${el}
                 </button>
                `;
    });

    document.getElementById("cat_main").innerHTML = html;
}


//ADD UNDER CATHEGORIES TO THE FILTER SECTION
const addUnderCat = (array) => {
    let html ="";

    //Nullstill arrayet
    catArray = [];
    
    //Loop gjennom argument- arrayet og finn elementer det har til felles med arrayet som inneholder alle underkategorier
    //Push disse elementene inn i catArray
    for (let i = 0; i<array.length; i++) {

        for (let j = 0; j<c_u_arr.length; j++){

            if (array[i].cathegory_under === c_u_arr[j]) {

                let c = array[i].cathegory_under;
                catArray.push(c);
            }
        }
    }

    //lag nytt array med bare unike verdier
    catUni = catArray.filter(onlysizeUnique);
    
    //Vis den nye listen på siden som separate tagger
    catUni.forEach((el, i) => {                
        html += `
                <button id=${el} class="tag cat_tag" value=unchecked type="checkbox">
                 ${el}
                 </button>
                `;
    });

    document.getElementById("cat_content").innerHTML = html;
}


//ADD SIZES TO THE FILTER SECTION
const addSizes = (array) => {
    let html ="";
    sizeArray = [];
    
    for (let i = 0; i<array.length; i++) {
        
        for (let j = 0; j<allSizes.length; j++) {
        
            for (let k = 0; k < array[i].size.length; k++) {
                if (array[i].size[k] === allSizes[j]) {
                    
                    let s = array[i].size[k];
                    sizeArray.push(s); 
                }     
            }   
        }
    }
    //lag ny liste med bare sizeUnike verdier
    sizeUni = sizeArray.filter(onlysizeUnique);
    sizeUni.sort(function(a,b){return a-b});
    
    //Sørg for at den nye listen vises på siden
    sizeUni.forEach((el, i) => {                
        html += `
        <button type="checkbox" value="unchecked" id=${el} class="tag cat_size">
        ${el}
        </button>
        `
    })
       
    document.getElementById("size_content").innerHTML = html;
}


//ADD ATTRIBUTES TO THE FILTER SECTION
const addAttribute = (a) => {
    let html = "";
    attArr = [];

    for (let i=0; i<a.length; i++) {
        
        for (let j = 0; j < qualities.length; j++) {

            for (let k = 0; k < a[i].quality1.length; k++) {
                if(a[i].quality1[k] === qualities[j] ) {
                  
                    attArr.push(a[i].quality1[k]);
                }
            }
        }
    }

    //lag ny liste med bare sizeUnike verdier
    attUni = attArr.filter(onlysizeUnique);
    
    //Sørg for at den nye listen vises på siden
    attUni.forEach(el => {                
        html += `
        <button data-checked="0" value="unchecked" id=${el} class="tag att_tag">
        ${el}
        </button>
        `
   })
       
   document.getElementById("att_content").innerHTML = html;   
}


//ADD COLORS TO THE FILTER SECTION

const addColor = (a) => {
    let html = "";

    clrArr = [];

    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < colors.length; j++) {

            for (let k = 0; k < a[i].color.length; k++) {
                clr = a[i].color[k];

                if(clr === colors[j]) {

                    clrArr.push(clr);
                    

                }
            }
        }
    }; 

    //lag ny liste med bare sizeUnike verdier
    clrUni = clrArr.filter(onlysizeUnique);
    
    
    //Sørg for at den nye listen vises på siden
    clrUni.forEach((el, i) => {                
        if (el === '#c1272d') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}" class="tag clr_large radio_clr" style="background-color: #c1272d; color: #ffffff;">${hexToClr(el)}</button>
            `; 
        } else if (el === '#707312') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}"  class="tag clr_large radio_clr" style="background-color: #707312; color: #ffffff;">${hexToClr(el)}</button>
            `; 
    
        } else if (el === '#96acd9') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}" class="tag clr_large radio_clr" style="background-color: #96acd9; color: #ffffff;">${hexToClr(el)}</button>
            `; 
    
        } else if (el === '#333333') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}" class="tag clr_large radio_clr" style="background-color: #333333; color: #ffffff;">${hexToClr(el)}</button>
            `; 
        } else if (el === '#73434b') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}" class="tag clr_large radio_clr" style="background-color: #73434b; color: #ffffff;">${hexToClr(el)}</button>
            `; 
    
        } else if (el === '#808080') {
            html += `
            <button data-active="0" value="unchecked" type="radio" name="c" id="${hexToClr(el)}" class="tag clr_large radio_clr" style="background-color: #808080; color: #ffffff;">${hexToClr(el)}</button>
            `; 
        }
   })
    document.getElementById("color_content").innerHTML = html;
}

//-----------------------------------------------------------------------------

//KONVERTER HEX TIL FARGENAVN    
const hexToClr = (hex) => {
   
    for (let i = 0; i < colorCodes.length; i++) {
     
        if (hex == colorCodes[i].clrHex ) {
            
            return colorCodes[i].clrName;
        }
    }
}


//--------------------------------------------------------------------------------------

 //CHECK IF AN ARRAYS VALUE IS UNIQUE
 const onlysizeUnique = (value, index, self) => {
    return self.indexOf(value) === index;
    }

//-------------------------------------------------------------------

//Kall funksjonene som fyller filterseksjonen med filtermuligheter
addCat(products)
addUnderCat(products);
addSizes(products)
addColor(products)
addAttribute(products)


//Legg til lyttere på alle buttons på filterseksjonen
filterWrap.addEventListener("click", (e) => {
    if(e.target.nodeName === "BUTTON") {
        applyFilter(e);
        }
})

//---------------------------------------------------------------------------------

//FILTRERINGEN

let mainCatChoosen = false,underCatChoosen = false, sizeCatSelected = false;
let mainHolderArray = [], subHolderArray = [], sizeHolderArray = [];

const applyFilter = (evt) => {

    //Endrer value til en checkbox basert på om den er checked eller ikke, og endrer style hvis den er det. 
    if (evt.target.value == "unchecked"){
        evt.target.value = "checked";
        evt.target.dataset.active = "1"; 
        evt.target.dataset.checked = "1"; 
        
    } else if (evt.target.value == "checked") {
        evt.target.value = "unchecked";
        evt.target.dataset.active = "0";
        evt.target.dataset.checked = "0";
        
    }

    //Kaller selveste filterfunksjonen
    mainFilter(evt);
}


//Filtrerer på unlike kategorier
const filterSizes = (value, products) => {
    const result = [];
    for (let product of products) {

        for (let item of product.size) {
            if (item === value) {
                result.push(product);
            }
        }
    }
    return result;
}

const filterAtt = (value, products) => {
    const result = [];
    for (let product of products) {

        for (let item of product.quality1) {
            if (item === value) {
                result.push(product);
            }
        }
    }
    return result;
}

const filterClr = (value, products) => {
    const result = [];
    for (let product of products) {

        for (let item of product.color) {
            if (hexToClr(item) == value) {
                result.push(product);
            }
        }
    }
    return result;
}

//Generell filterfunksjon
const filter = (condition, collection) => {
    const result = [];

    for (let item of collection) {
        if (condition(item)) {
            result.push(item);
        }
    }
    return result;
}


//Fjern filtre / nullstill søk
const removeFilters = (evt) => {
    mainCatChoosen = false;
    underCatChoosen = false;
    sizeCatSelected = false;
    addObjects(products);
    addSizes(products);
    addCat(products);
    addUnderCat(products);
}


//Oppretter lytter for Tøm-filter-knappen og nullstill-søk-knappen
const clearBtn = document.getElementById("clearFiltersReal");
clearBtn.addEventListener("click", removeFilters);

const clearSearch = document.getElementById("clearSearch");
clearSearch.addEventListener("click", removeFilters);


//SELVESTE FILTERFUNKSJONEN
const mainFilter = (evt) => {
    let tempArray = [];
    //Setter verdien til resultArray til products-arrayet, slik at det slår inn når ingen andre filtre er i kraft
    let resultArray = products;
    let tag = document.querySelectorAll(".tag");

    //Går gjennom alle tagene og sjekker om de er checked eller ikke. Hvis de er det pushes tagen inn i tempArray.
    for (let i = 0; i < tag.length; i++) {
        if (tag[i].value == "checked") {
            tempArray.push(tag[i]);
        }
    }
    
    //Går gjennom tempArray, og avgjør hva produktene skal filtreres på ut fra klassenavnet på tagen (som er element i tempArray)
    for (let i = 0; i < tempArray.length; i++) {
        
        if (tempArray[i].className == "tag cat_main") {
           
           //Lager betingelsen som filterfunksjonen skal bruke, kaller filter() med den betingelsen, og lagrer resultatet i resultArray.  
           const mainCat = item => item.cathegory_main == tempArray[i].id
           resultArray = filter(mainCat, products); 
           

        } else if (tempArray[i].className == "tag cat_tag") {
            const subCat = item => item.cathegory_under == tempArray[i].id;
            resultArray = filter(subCat, resultArray);
            

        } else if (tempArray[i].className == "tag cat_size") {
            //Lagrer elementets id som et nummmer, bruker det som et parameter i filterSizes() og kaller filterSizes(), og lagrer resultatet i resultArray
            let val = Number(tempArray[i].id);
            resultArray = filterSizes(val, resultArray);
            

        } else if(tempArray[i].className == "tag att_tag") {
            resultArray = filterAtt(tempArray[i].id, resultArray);
            

        } else if (tempArray[i].className == "tag clr_large radio_clr") {
            resultArray = filterClr(tempArray[i].id, resultArray);

        }  

        if (resultArray.length === 0) {
            alert("Ingen produkter matcher søket ditt");   
        }
    }

    addObjects(resultArray);
    addEventButton();
}
