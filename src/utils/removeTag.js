//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import {filtersArray} from "./filters";
import { resultsArray } from "./search";
import addRecipes from "../utils/addRecipes";
import clearPage from "../utils/clearPage";
import updateFilters from "../utils/updateFilters"


/**
* Teste si une liste de recherche est vide ou non et affiche un message en fonction
* @param {string} arrayName Array à tester
*/
let ifEmpty = (arrayName) => {
    let noResult = document.getElementById('no-result');
    if(arrayName.length == 0) { 
        noResult.innerText = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
        noResult.style.display = "inline"
       } else if (arrayName.length > 0) {
           noResult.style.display = "none";
       } else {
           noResult.display="inline";
       }
}


/**
* Fonction pour supprimer les tags et re-mettre à jour la recherche
* @param {String} array Liste à trier 
* @param {String} key Attribut des objets
* @returns Retourne la liste mise à jour
 */
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
/**
 * Fonction pour supprimer les tags et re-mettre à jour la recherche
 * @param {string} listName Liste à re-filtrer
 */
export default function removeTag(listName) {
    //Récupère la liste de tags
        for(let i = 0; i<listName.length; i++) { 
            //Supprime les tags
            listName[i].addEventListener('click', function(){
                
                //Trouver l'élément dans la liste de filtres
                for(let j = 0; j < filtersArray.length; j++) {
                    //Identifie le filtre dans la liste de filtre et le supprime
                    let filtersArray = updateFilters();
                    //Si la liste = 0, on re-met toutes les recettes à partir de l'input
                    if(filtersArray.length == 0 && resultsArray.length > 0) { clearPage(); addRecipes(removeDuplicate(resultsArray, 'id')); ifEmpty(resultsArray);
                        
                    //Si les filtres et les résultats de recherche sont nuls
                    }  else if(filtersArray.length == 0 && resultsArray.length == 0) { clearPage(); addRecipes(removeDuplicate(recipes, 'id'));
                    
                    //Si la liste de filtres > 0 élément et les résultats de recherche > 0
                     } else if (filtersArray.length > 0 && resultsArray.length > 0) {
                        //Sinon on re-filtre avec la liste 
                        let filterAll = [];
                        let filtersArray = updateFilters();
                        for(let recipe of resultsArray) { filterAll.push(recipe);  }
                        for(let k = 0; k < filterAll.length; k++) {
                            let trueNumb = 0 ;
                                    
                            for(let j = 0; j <= filtersArray.length; j++) {
                                if(filterAll[k].appliance == filtersArray[j]) {  trueNumb++; }

                                for(let i = 0; i < filterAll[k].ingredients.length; i++) {
                                    if(filterAll[k].ingredients[i].ingredient == filtersArray[j]) { trueNumb++; } 
                                }

                                for(let l = 0; l < resultsArray[k].ustensils.length; l++) {
                                    if(filterAll[k].ustensils[l] == filtersArray[j]) { trueNumb++;  }
                                }
                            }
                    
                            if(trueNumb !== filtersArray.length) {  
                                //A supprimer de la liste
                                filterAll.splice(k,1); k--;
                            }                               
                        }
                        clearPage(); addRecipes(removeDuplicate(filterAll, 'id')); ifEmpty(filterAll);
                       
                    //Si la liste de filtres > 0 mais qu'aucun mot-clé n'a été entré         
                    } else if (filtersArray.length > 0 && resultsArray.length == 0) {
                        //On re-filtre avec la liste de filtres et toutes les recettes                                         
                        let filterAll = [];
                        let filtersArray = updateFilters();
                        for(let i = 0; i < filtersArray.length; i++) {        
                            for(let j = 0; j< recipes.length; j++) {
                                
                                if(recipes[j].appliance == filtersArray[i]) { filterAll.push(recipes[j]) ;  }

                                for(let k = 0; k < recipes[j].ingredients.length; k++) {
                                    if(recipes[j].ingredients[k].ingredient == filtersArray[i]) {  filterAll.push(recipes[j]) ; }
                                }
                                for(let l = 0; l < recipes[j].ustensils.length; l++) {  
                                    if(recipes[j].ustensils[l] == filtersArray[i]) {  filterAll.push(recipes[j]);    }
                                }                              
                            }
                        }
                        clearPage(); addRecipes(removeDuplicate(filterAll, 'id')); ifEmpty(filterAll);

                    }
                //Supprime le tag cliqué
                listName[i].style.display="none";   
                }
            });
        } 
    }