//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import { filtersArray } from "./filters";
import { resultsArray } from "./search";
import addRecipes from "../utils/addRecipes";
import clearPage from "../utils/clearPage"



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
                    if(filtersArray.length == 0 && resultsArray.length > 0) {
                        clearPage();
                        let recipesSearch = [];
                        let search = document.getElementById('search-input').value.toLowerCase();
                        if(recipes[i].appliance.toLowerCase().includes(search) || recipes[i].appliance.includes(search) || recipes[i].description.includes(search)) {
                            resultsArray.push(recipesSearch);
                        } 
                        addRecipes(resultsArray); 
                    }  else if(resultsArray.length == 0 && filtersArray.length == 0) {
                        clearPage(); addRecipes(recipes);
                    }
                    else {
                    //Sinon on re-filtre avec la liste 
                    let filterAll = [];
                    for(let i = 0; i < recipes.length; i++){
                        for(let j = 0; j < recipes.ingredients.length; j++) {
                            for(let k = 0; k < recipes.ustensils.length; k++) {
                                if(recipes[i].ingredients[j].ingredient.includes(elem) ||
                                recipes[i].ustensils[k].includes(elem) ||
                                recipes[i].appliance.includes(elem)) {
                                    filterAll.push(recipes[i])
                                }
                            }
                        }
                        clearPage(filterAll); addRecipes(filterAll); 
                        }                    
                    }
                }
                //Supprime le tag cliqué
                listName[i].remove();   
            });
        }
    }