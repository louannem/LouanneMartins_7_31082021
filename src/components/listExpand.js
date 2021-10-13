

export default function listExpand() {
    let inputIngredient = document.getElementById('ingredient-input');
    let boxIngredients = document.getElementById('ingredients-expand');
    let inputAppareil = document.getElementById('appareils-input');
    let boxAppareil = document.getElementById('appareils-expand');
    let inputUsentiles = document.getElementById('ustensiles-input');
    let parentNode = document.getElementById('ustensiles-search');
    let boxUstensiles = parentNode.getElementsByTagName('div')[0];
    
    //Fonctions à réutiliser
    let addingClass = (paraStyle1, paraStyle2,size,paraClass1,paraClass2,classe) => {
        paraStyle1.style.width=size;
        paraStyle2.style.width=size;
        paraClass1.classList.add('onclick');
        paraClass2.classList.add(classe);
    }

    let removingClass = (paraStyle1, paraStyle2,size,paraClass1,paraClass2,classe) => {
        paraStyle1.style.width=size;
        paraStyle2.style.width=size;
        paraClass1.classList.remove('onclick');
        paraClass2.classList.remove(classe);
    }

    let callFonction = (paraEvent1,paraEvent2, fonction) => {
        paraEvent1.addEventListener('click', fonction);
        paraEvent2.addEventListener('click', fonction);
    }


    //Fonctions pour les dropdowns
    let searchIngredient = () => {
        let searchWrapper = document.getElementById('ingredients-search');
        let listWrapper = document.getElementById('ingredients-list');

        if(searchWrapper.classList.contains('show')) {
            removingClass(searchWrapper, listWrapper, "170px",inputIngredient,listWrapper, "grid-list");            
            inputIngredient.setAttribute('placeholder', 'Ingrédient');

        } else { 
            addingClass(searchWrapper, listWrapper, "500px",inputIngredient,listWrapper, "grid-list")
            inputIngredient.setAttribute('placeholder', 'Rechercher un ingrédient');
        }
    }
   callFonction(inputIngredient,boxIngredients,searchIngredient)


    let searchAppareils = () => {
        let searchWrapper = document.getElementById('appareils-search');
        let listWrapper = document.getElementById('appareils-list');
        if(searchWrapper.classList.contains('show')) {
            removingClass(searchWrapper, listWrapper, "170px",inputAppareil,listWrapper, "grid-list-appareils");
            inputAppareil.setAttribute('placeholder', 'Appareils');
        } else { 
            inputAppareil.setAttribute('placeholder', 'Rechercher un appareil');
            addingClass(searchWrapper, listWrapper, "500px",inputAppareil,listWrapper, "grid-list-appareils");
        }
    }
    callFonction(inputAppareil,boxAppareil,searchAppareils)



    let searchUstensiles = () => {
        let searchWrapper = document.getElementById('ustensiles-search');
        let listWrapper = document.getElementById('ustensiles-list');

        if(searchWrapper.classList.contains('show')) {
            removingClass(searchWrapper, listWrapper, "170px",inputUsentiles,listWrapper, "grid-list");
            inputUsentiles.setAttribute('placeholder', 'Ustensiles');
        } else { 
            addingClass(searchWrapper, listWrapper, "500px",inputUsentiles,listWrapper, "grid-list");
            inputUsentiles.setAttribute('placeholder', 'Rechercher un ustensile');
        }
    }
    callFonction(inputUsentiles, boxUstensiles, searchUstensiles);

    //Closes the others dropdowns if another one is open
    let dropdownElem = document.querySelectorAll('.dropdown-toggle');
    dropdownElem.forEach(element => {
        element.addEventListener('click', function(){
            let appareilExp = boxAppareil.getAttribute('aria-expanded'), ustExp = boxUstensiles.getAttribute('aria-expanded'), ingrExp = boxIngredients.getAttribute('aria-expanded')
            
            //Si l'élément ouvert est en true et le nouvel élément cliqué es encore sur false
            //On cache la liste et on agrandi/réduit les dropdown
            if(appareilExp == "true" && element.getAttribute('aria-expanded') == "false") { boxAppareil.nextElementSibling.classList.remove('show'); searchAppareils()}
            else if (ingrExp == "true" && element.getAttribute('aria-expanded') == "false") { boxIngredients.nextElementSibling.classList.remove('show'); searchIngredient();}
            else if (ustExp == "true" && element.getAttribute('aria-expanded') == "false") { boxUstensiles.nextElementSibling.classList.remove('show'); searchUstensiles();}


           
        } )
    });  
}