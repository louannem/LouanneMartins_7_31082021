import { Ingredient } from './components/Ingredients'
import { Recipe } from './components/Recipes'
import {recipes} from '../src/data/recipes'
import ingredientsList from './utiles/dropdownLists';
import listExpand from './components/listExpand';
import globalSearch from './utiles/search';
import filtersFunction from './utiles/filters';



const init = () => {
    globalSearch();
    ingredientsList();
    listExpand();
    filtersFunction();
}
init();
