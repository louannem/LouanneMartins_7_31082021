//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import { filtersArray, tagList } from "./filters";
import addRecipes from "../utils/addRecipes";
import addIngredients from "../utils/addRecipes";
import clearPage from "./utils";


export default function removeTag(listName) {
    //Récupère la liste de tags
    
        for(let i = 0; i<listName.length; i++) { 
            //Supprime les tags
            listName[i].addEventListener('click', function(){

                //Trouver l'élément dans la liste de filtres
                for(let j = 0; j < filtersArray.length; j++) {
                    //Identifie le filtre dans la liste de filtre et le supprime
                    if(listName[i].innerText == filtersArray[j]) { filtersArray.splice(j, 1); }

                    //Si la liste = 0, on re-met toutes les recettes à partir de l'input
                    if(filtersArray.length == 0) {
                        clearPage();
                        let recipesSearch = [];
                        for(let i = 0; i < recipes.length; i ++) { recipesSearch.push(recipes[i])}
                        let search = document.getElementById('search-input').value.toLowerCase();
                        const filteredObjt = recipesSearch.filter(recipe => {
                            return(
                                recipe.name.toLowerCase().includes(search) ||
                                recipe.description.toLowerCase().includes(search) 
                            )
                        });
                        addRecipes(filteredObjt); addIngredients(filteredObjt);
                    } else {
                        console.log(tagList)
                    //Sinon on re-filtre avec la liste   
                    
                    }
                }
                //Supprime le tag cliqué
                listName[i].remove();
            })
        }
    
        
}