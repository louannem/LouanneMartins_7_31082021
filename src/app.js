import './css/style.css'

let inputIngredient = document.getElementById('ingredient-input');
let inputAppareil = document.getElementById('appareils-input');
let inputUsentiles = document.getElementById('ustensiles-input');

var searchIngredient = () => {
    let searchWrapper = document.getElementById('ingredients-search');
    let listWrapper = document.getElementById('ingredients-list');

    if(searchWrapper.classList.contains('show')) {
        searchWrapper.style.width="170px";
        listWrapper.style.width="170px"
    } else { searchWrapper.style.width="500px"; listWrapper.style.width="500px"}
}
inputIngredient.addEventListener('click', searchIngredient)

var searchAppareils = () => {
    let searchWrapper = document.getElementById('appareils-search');
    let listWrapper = document.getElementById('appareils-list');
    if(searchWrapper.classList.contains('show')) {
        searchWrapper.style.width="170px";
        listWrapper.style.width = "170px";
    } else { 
        searchWrapper.style.width="500px";
        listWrapper.style.width="500px" ;
    }
}
inputAppareil.addEventListener('click', searchAppareils)

var searchUstensiles = () => {
    let searchWrapper = document.getElementById('ustensiles-search');
    let listWrapper = document.getElementById('ustensiles-list');

    if(searchWrapper.classList.contains('show')) {
        searchWrapper.style.width="170px";
        listWrapper.style.width = "170px";
    } else { searchWrapper.style.width="500px"; listWrapper.style.width="500px"}
}
inputUsentiles.addEventListener('click', searchUstensiles)