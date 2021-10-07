import listExpand from "./components/listExpand";
import searchFunction from "./utils/search";

export let ingredientsFilters = [], applianceFilters = [], ustensilsFilters= [];
const init = () => {
    searchFunction();
    listExpand();
}

init();