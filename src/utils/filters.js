import { recipes } from "../data/recipes";
import { resultsArray } from "./search";
import clearPage from "./clearPage";
import addRecipes from "./addRecipes";
import removeTag from "./removeTag";

export let tagList, filtersArray = [];
let ingredientsList = [], applianceList = [], ustensilsList = []

export default function filterFunction () {
    let tags = document.querySelectorAll('.dropdown-menu span');

    let ingredientsArray = [];
    let appareilsArray = [];
    let ustensilsArray = [];

    //Crée les listes comparatives pour ajouter les filtres séparemment
    for(let j = 0; j < recipes.length; j++) {
        for(let k = 0; k < recipes[j].ingredients.length; k++) { ingredientsArray.push(recipes[j].ingredients[k].ingredient) }
        for(let k = 0; k < recipes[j].appliance.length; k++) { appareilsArray.push(recipes[j].appliance) }
        for(let k = 0; k < recipes[j].ustensils.length; k++) { ustensilsArray.push(recipes[j].ustensils[k]) }        
    }

    for(let i = 0; i < tags.length; i++) {
        let addTags = () => {

             //Adds the new tag 
            let newTag = document.createElement('span');
            newTag.classList.add('added-tag');
            newTag.innerText = tags[i].innerText;
            document.getElementById('added-tags').appendChild(newTag);
            let addedTags = document.querySelectorAll('.added-tag');
            tagList = document.querySelectorAll('#added-tags .added-tag');
            //Adds icon
            let deleteIcon = document.createElement('img');
            for(let tag of addedTags) { tag.appendChild(deleteIcon)};
            const iconPath = require('../assets/delete_icon.png');
            deleteIcon.setAttribute('src', iconPath);

            //Ajout des classes personnalisées
            for(let i = 0; i < recipes.length; i++) {
                for(let j = 0; j < recipes[i].ingredients.length; j++) {
                    if(recipes[i].ingredients[j].ingredient == newTag.textContent) { newTag.classList.add('ingredient-tag');}
                }
                for(let k = 0; k < recipes[i].ustensils.length; k++) {
                    if(recipes[i].ustensils[k] == newTag.textContent)  { newTag.classList.add('ustentil-tag'); }
                }
                for(let l = 0; l < recipes[i].appliance.length; l++) {
                    if(recipes[i].appliance == newTag.textContent)  { newTag.classList.add('appliance-tag'); }
                }
            }

            //Ajout des tags dans chaque liste de filtre
            for(let tag of addedTags) {
                let tagName = tag.innerText;
                if(!filtersArray.includes(tagName) && ingredientsArray.includes(tagName)) { filtersArray.push(tagName); ingredientsList.push(tagName); }
                if(!filtersArray.includes(tagName) && ustensilsArray.includes(tagName)) { filtersArray.push(tagName); ustensilsList.push(tagName)}
                if(!filtersArray.includes(tagName) && appareilsArray.includes(tagName)) { filtersArray.push(tagName); applianceList.push(tagName)}
             }

            //Fonction pour vérifier si une liste est vide
            let ifEmpty = (arrayName) => {
                let noResult = document.getElementById('no-result');
                if(arrayName.length == 0) { 
                    noResult.innerText = "Pas de recette trouvée.";
                    noResult.style.display = "inline"
                   } else if (arrayName.length > 0) {
                       noResult.style.display = "none";
                   } else {
                       noResult.display="inline";
                   }
            }


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

            //Filtre les résultats selon les nouvelles listes de filtres
             //Départ avant l'ajout d'un tag : toutes les listes de filtres sont vides

///////////////////Filtre avec liste unique////////////////////////////////////////////////////////////
                //Cas 1 : l'utilisateur a utilisé la barre de recherche
                let filterAll = [];
               
                if(filtersArray.length > 0 && resultsArray.length > 0) {
                    
                    for(let tag of filtersArray) {     
                        for(let i = 0; i < resultsArray.length; i++) {
                            for(let j = 0; j < resultsArray[i].ingredients.length; j++) {
                                for(let k = 0; k < resultsArray[i].ustensils.length; k ++) {
                                    
                                    //Cas 1 : ingrédients > 0, app = 0 & ust = 0
                                    if(ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length == 0) {
                                        if(resultsArray[i].ingredients[j].ingredient.indexOf(tag) > -1) { 
                                            filterAll.push(resultsArray[i])
                                        }
                                       
                                        //return resultsArray[i].ingredients[j].ingredient == tag

                                        //Cas é : ing = 0, app > 0, ust = 0
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
          
          clearPage(); addRecipes(removeDuplicate(filterAll, 'id'));
                            
                    
                
                    //Cas 2 : l'utilisateur choisit d'abord un filtre
                } else if (filtersArray.length > 0 && resultsArray.length == 0) {               
                        for(let tag of filtersArray) {     
                            for(let i = 0; i < recipes.length; i++) {
                                for(let j = 0; j < recipes[i].ingredients.length; j++) {
                                    for(let k = 0; k < recipes[i].ustensils.length; k ++) {
                                        
                                        //Cas 1 : ingrédients > 0, app = 0 & ust = 0
                                        if(ingredientsList.length > 0 && applianceList.length == 0 && ustensilsList.length == 0) {
                                            if(recipes[i].ingredients[j].ingredient.indexOf(tag) > -1) {
                                                filterAll.push(recipes[i])                                                
                                            }
                                            //Cas é : ing = 0, app > 0, ust = 0
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
                  
              clearPage(); addRecipes(removeDuplicate(filterAll, 'id'));
            }
            
            removeTag(tagList);
        }
        tags[i].addEventListener('click', addTags)
    }
}