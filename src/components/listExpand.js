export default function listExpand() {
    let inputIngredient = document.getElementById('ingredient-input');
    let boxIngredients = document.getElementById('ingredients-expand');
    let inputAppareil = document.getElementById('appareils-input');
    let boxAppareil = document.getElementById('appareils-expand');
    let inputUsentiles = document.getElementById('ustensiles-input');
    let parentNode = document.getElementById('ustensiles-search');
    let boxUstensiles = parentNode.getElementsByTagName('div')[0];
    

    var searchIngredient = () => {
        let searchWrapper = document.getElementById('ingredients-search');
        let listWrapper = document.getElementById('ingredients-list');

        if(searchWrapper.classList.contains('show')) {
            searchWrapper.style.width="170px";
            listWrapper.style.width="170px";
            inputIngredient.setAttribute('placeholder', 'Ingrédient');
            inputIngredient.classList.remove('onclick');
            listWrapper.classList.remove('grid-list');

        } else { 
            searchWrapper.style.width="500px"; 
            listWrapper.style.width="500px"; 
            inputIngredient.setAttribute('placeholder', 'Rechercher un ingrédient');
            inputIngredient.classList.add('onclick');
            listWrapper.classList.add('grid-list');
        }
    }
    inputIngredient.addEventListener('click', searchIngredient);
    boxIngredients.addEventListener('click', searchIngredient);


    var searchAppareils = () => {
        let searchWrapper = document.getElementById('appareils-search');
        let listWrapper = document.getElementById('appareils-list');
        if(searchWrapper.classList.contains('show')) {
            searchWrapper.style.width="170px";
            listWrapper.style.width = "170px";
            inputAppareil.setAttribute('placeholder', 'Appareils');
            inputAppareil.classList.remove('onclick');
            listWrapper.classList.remove('grid-list-appareils');
        } else { 
            searchWrapper.style.width="500px";
            listWrapper.style.width="500px" ;
            inputAppareil.setAttribute('placeholder', 'Rechercher un appareil');
            inputAppareil.classList.add('onclick');
            listWrapper.classList.add('grid-list-appareils');
        }
    }
    inputAppareil.addEventListener('click', searchAppareils);
    boxAppareil.addEventListener('click', searchAppareils);

    var searchUstensiles = () => {
        let searchWrapper = document.getElementById('ustensiles-search');
        let listWrapper = document.getElementById('ustensiles-list');

        if(searchWrapper.classList.contains('show')) {
            searchWrapper.style.width="170px";
            listWrapper.style.width = "170px";
            inputUsentiles.setAttribute('placeholder', 'Ustensiles');
            inputUsentiles.classList.remove('onclick');
            listWrapper.classList.remove('grid-list');
        } else { 
            searchWrapper.style.width="500px"; 
            listWrapper.style.width="500px";
            inputUsentiles.setAttribute('placeholder', 'Rechercher un ustensile');
            inputUsentiles.classList.add('onclick');
            listWrapper.classList.add('grid-list');
        }
    }
    inputUsentiles.addEventListener('click', searchUstensiles);
    boxUstensiles.addEventListener('click', searchUstensiles);
}