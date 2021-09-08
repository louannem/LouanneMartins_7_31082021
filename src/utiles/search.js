//Search algo with for loop

import { recipes } from "../data/recipes"
import { Recipes } from "../components/Recipes";

export default function searchFunction(){
    let input = document.getElementById('search-input');
    
    let globalSearch = (searchItem) => {
        searchItem = input.value;
        for(let i = 0; i<recipes.length; i++) {
            let recipesID = document.getElementById("recipe-"+ recipes[i].id);

            if(recipes[i].name.includes(searchItem) || recipes[i].appliance.includes(searchItem)) {
                let newList = new Recipes(recipes[i]);
                console.log("Trouvé : " + newList);
                recipesID.style.display = "";
                //console.log(newList.diplayRecipe())
                }  else {  recipesID.style.display = "none" ;}
        }
    }
    input.addEventListener('input', globalSearch)
}