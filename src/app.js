import ingredientsList from './utils/dropdownLists';
import listExpand from './components/listExpand';
import searchFunction from './utils/search';
import filterFunction from './utils/filters';
import removeTag from './utils/removeTag';




const init = () => {
    searchFunction();
    ingredientsList();
    listExpand();
    filterFunction();
    removeTag();  
}
init();