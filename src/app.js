import { Ingredients } from './components/Ingredients'
import { NoUnit } from './components/Ingredients' 
import { NoQuantity } from './components/Ingredients'
import { NoUnitAndQuantity } from './components/Ingredients';
import { Recipes } from './components/Recipes'
import './css/style.css'
import {recipes} from './data/recipes'
import ingredientsList from './utiles/dropdownLists';


for(let i = 0; i<recipes.length; i++) {
    let recipesList = new Recipes(recipes[i])
    document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();

    for(let j = 0; j < recipes[i].ingredients.length; j ++) {
        let ingredientsBlock = document.getElementById(recipes[i].id);

        let ingredientsList = new Ingredients(recipes[i].ingredients[j]);
        ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
    }
}

ingredientsList()


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