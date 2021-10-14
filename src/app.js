import listExpand from "./components/listExpand";
import searchFunction from "./utils/search";
import updateFilters from "./utils/updateFilters";

const init = () => {
    searchFunction();
    listExpand();
}

init();
