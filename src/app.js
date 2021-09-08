import { Ingredients } from './components/Ingredients'
import { Recipes } from './components/Recipes'
import {recipes} from '../src/data/recipes'
import ingredientsList from './utiles/dropdownLists';
import listExpand from './components/listExpand';
import searchFunction from './utiles/search';
import globalSearch from './utiles/search'

let listParent = document.getElementsByClassName('dropdown-toggle');
let gridList = listParent.firstChild;


for(let i = 0; i<recipes.length; i++) {
    let recipesList = new Recipes(recipes[i])
    document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();

    for(let j = 0; j < recipes[i].ingredients.length; j ++) {
        let ingredientsBlock = document.getElementById(recipes[i].id);

        let ingredientsList = new Ingredients(recipes[i].ingredients[j]);
        ingredientsBlock.innerHTML += ingredientsList.displayIngredient();

    }
}

ingredientsList();
listExpand();
globalSearch();

