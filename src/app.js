import listExpand from "./components/listExpand";
import filterFunction from "./utils/filters";
import searchFunction from "./utils/search";


const init = () => {
    searchFunction();
    listExpand();
}

init();