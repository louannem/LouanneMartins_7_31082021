//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import { filtersArray,ingredientsList, applianceList, ustensilsList } from "./filters";
import { resultsArray } from "./search";
import addRecipes from "../utils/addRecipes";
import clearPage from "../utils/clearPage"

//Fonction pour supprimer les doublons avec boucle for()
function removeDuplicate(array, key) {
    let check = {};
    let newArray = [];
    for(let i=0; i<array.length; i++) {
        if(!check[array[i][key]]){
            check[array[i][key]] = true;
            newArray.push(array[i]);
        }
    }
    return newArray;
}

export default function removeTag(listName) {
    //Récupère la liste de tags
        for(let i = 0; i<listName.length; i++) { 
            //Supprime les tags
            listName[i].addEventListener('click', function(){
                
                //Trouver l'élément dans la liste de filtres
                for(let j = 0; j < filtersArray.length; j++) {
                    //Identifie le filtre dans la liste de filtre et le supprime
                    if(listName[i].innerText == filtersArray[j]) { filtersArray.splice(j, 1);}
      
                    //Si la liste = 0, on re-met toutes les recettes à partir de l'input
                    if(filtersArray.length == 0 && resultsArray.length > 0) {
                        console.log(resultsArray)
                        clearPage(); addRecipes(removeDuplicate(resultsArray, 'id'));
                        
                        
                    }  else if(resultsArray.length == 0 && filtersArray.length == 0) {
                        clearPage(); addRecipes(removeDuplicate(recipes, 'id'));
                    
                     } else if (filtersArray.length > 0 && resultsArray.length > 0) {
                    //Sinon on re-filtre avec la liste 
                    let filterAll = [];
                    for(let tag of filtersArray) {     
                        for(let i = 0; i < resultsArray.length; i++) {
                            for(let j = 0; j < resultsArray[i].ingredients.length; j++) {
                                for(let k = 0; k < resultsArray[i].ustensils.length; k ++) {
                                    
                                    //Cas 1 : ingrédients > 0, app = 0 & ust = 0
                                    if(ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length == 0) {
                                        if(resultsArray[i].ingredients[j].ingredient.indexOf(tag) > -1) { 
                                            filterAll.push(resultsArray[i])
                                        }
                                       

                                        //Cas 2 : ing = 0, app > 0, ust = 0
                                    } else if (ingredientsList.length == 0 && applianceList.length > 0 && ustensilsList.length == 0){
                                        if(resultsArray[i].appliance.indexOf(tag) > -1) {
                                            filterAll.push(resultsArray[i])
                                    }
                                } else if (ingredientsList.length == 0 && applianceList.length == 0 && ustensilsList.length > 0){
                                    if(resultsArray[i].ustensils[k].indexOf(tag) > -1) {
                                        filterAll.push(resultsArray[i])
                                    }
                                } else if (ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length > 0){
                                    for(let ustensil of ustensilsList) {
                                        if(resultsArray[i].ustensils[k].indexOf(ustensil) > -1 && resultsArray[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                            filterAll.push(resultsArray[i])
                                        }
                                    } 
                                } else if (ingredientsList.length > 0 && applianceList.length > 0 && ustensilsList.length == 0){
                                    for(let appliance of applianceList) {
                                        if(resultsArray[i].appliance.indexOf(appliance) > -1 && resultsArray[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                            filterAll.push(resultsArray[i])
                                        }
                                    }
                                } else if (ingredientsList.length == 0 && applianceList.length > 0 && ustensilsList.length > 0){
                                    for(let appliance of applianceList) {
                                        if(resultsArray[i].appliance.indexOf(appliance) > -1 && resultsArray[i].ustensils[k].indexOf(tag) > -1) {
                                            filterAll.push(resultsArray[i])
                                        }
                                    }
                                } else if (ingredientsList.length > 0 && applianceList.length > 0 && ustensilsList.length > 0){
                                    for(let appliance of applianceList) {
                                        for (let ingredient of ingredientsList) {
                                            if(resultsArray[i].appliance.indexOf(appliance) > -1 && resultsArray[i].ustensils[k].indexOf(tag) > -1 && resultsArray[i].ingredients[j].ingredient.indexOf(ingredient)) {
                                                filterAll.push(resultsArray[i])
                                            }
                                        }
                                    }
                                }
                               
                            }         
                        }
                    }
                }                      
          console.log(filterAll)
          clearPage(); addRecipes(removeDuplicate(filterAll, 'id'));
                    
                                            
                    } else if (filtersArray.length > 0 && resultsArray.length == 0) {
                        //On re-filtre avec la liste de fitlres et toutes les recettes
                        let filterAll = [];
                        for(let tag of filtersArray) {     
                            for(let i = 0; i < recipes.length; i++) {
                                for(let j = 0; j < recipes[i].ingredients.length; j++) {
                                    for(let k = 0; k < recipes[i].ustensils.length; k ++) {
                                        
                                        //Cas 1 : ingrédients > 0, app = 0 & ust = 0
                                        if(ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length == 0) {
                                            if(recipes[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                                filterAll.push(recipes[i])                                                
                                            }
                                            //Cas 2 : ing = 0, app > 0, ust = 0
                                            } else if (ingredientsList.length == 0 && applianceList.length > 0 && ustensilsList.length == 0){
                                                if(recipes[i].appliance.indexOf(tag) > -1) {
                                                    filterAll.push(recipes[i])
                                            }
                                        } else if (ingredientsList.length == 0 && applianceList.length == 0 && ustensilsList.length > 0){
                                            if(recipes[i].ustensils[k].indexOf(tag) > -1) {
                                                filterAll.push(recipes[i])
                                            }
                                        } else if (ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length > 0){
                                            for(let ustensil of ustensilsList) {
                                                if(recipes[i].ustensils[k].indexOf(ustensil) > -1 && recipes[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                                    filterAll.push(recipes[i])
                                                }
                                            } 
                                        } else if (ingredientsList.length > 0 && applianceList.length > 0 && ustensilsList.length == 0){
                                            for(let appliance of applianceList) {
                                                if(recipes[i].appliance.indexOf(appliance) > -1 && recipes[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                                    filterAll.push(recipes[i])
                                                }
                                            }
                                        } else if (ingredientsList.length == 0 && applianceList.length > 0 && ustensilsList.length > 0){
                                            for(let appliance of applianceList) {
                                                if(recipes[i].appliance.indexOf(appliance) > -1 && recipes[i].ustensils[k].indexOf(tag) > -1) {
                                                    filterAll.push(recipes[i])
                                                }
                                            }
                                        } else if (ingredientsList.length > 0 && applianceList.length > 0 && ustensilsList.length > 0){
                                            for(let appliance of applianceList) {
                                                for (let ingredient of ingredientsList) {
                                                    if(recipes[i].appliance.indexOf(appliance) > -1 && recipes[i].ustensils[k].indexOf(tag) > -1 && recipes[i].ingredients[j].ingredient.indexOf(ingredient)) {
                                                        filterAll.push(recipes[i])
                                                    }
                                                }
                                            }
                                        }
                                    
                                    }         
                                }
                            }
                        }                      
                    console.log(filterAll)
                    clearPage(); addRecipes(removeDuplicate(filterAll, 'id'));
                    }
                        
                }
                //Supprime le tag cliqué
                listName[i].style.display="none";   
            });
        }
    }