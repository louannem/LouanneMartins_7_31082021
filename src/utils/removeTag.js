//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import { filtersArray, tagList } from "./filters";
import { resultsArray } from "./search";
import addRecipes from "../utils/addRecipes";
import clearPage from "../utils/clearPage"



export default function removeTag(listName) {
    //Récupère la liste de tags
        for(let i = 0; i<listName.length; i++) { 
            //Supprime les tags
            listName[i].addEventListener('click', function(){
                listName[i].style.display="none"
                
                //Trouver l'élément dans la liste de filtres
                for(let j = 0; j < filtersArray.length; j++) {
                    //Identifie le filtre dans la liste de filtre et le supprime
                    if(listName[i].innerText == filtersArray[j]) { filtersArray.splice(j, 1);}
                    console.log(listName)
/*
                    //Si la liste = 0, on re-met toutes les recettes à partir de l'input
                    if(filtersArray.length == 0 && resultsArray.length > 0) {
                        clearPage(); addRecipes(resultsArray);
                        
                        //addRecipes(resultsArray); 
                    }  else if(resultsArray.length == 0 && filtersArray.length == 0) {
                        clearPage(); addRecipes(recipes);
                    
                     } else if (filtersArray.length > 0 && resultsArray.length > 0) {
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
                        clearPage(); addRecipes(filterAll); 
                        }                    
                    } else if (filtersArray.length > 0 && resultsArray.length == 0) {
                        //On re-filtre avec la liste de fitlres et toutes les recettes
                    }*/
                }
                //Supprime le tag cliqué
                //listName[i].style.display="none";   
            });
        }
    }