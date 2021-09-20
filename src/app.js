import ingredientsList from './utils/dropdownLists';
import listExpand from './components/listExpand';
import searchFunction from './utils/search';
import filterFunction from './utils/filters';




const init = () => {
    searchFunction();
    ingredientsList();
    listExpand();
    filterFunction();
}
init();