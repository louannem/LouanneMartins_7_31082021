import listExpand from "./components/listExpand";
import filterFunction from "./utils/filters";
import searchFunction from "./utils/search";
import { recipes } from "./data/recipes";

export let recipesArray = [];
for(let recipe of recipes){recipesArray.push(recipe)}

const init = () => {
    searchFunction();
    listExpand();
    //filterFunction();
}

init();
