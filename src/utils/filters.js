import { recipes } from "../data/recipes";
import { resultsArray } from "./search";
import clearPage from "./clearPage";
import addRecipes from "./addRecipes";
import removeTag from "./removeTag";

export let tagList, filtersArray = [];

export default function filterFunction () {
    let tags = document.querySelectorAll('.dropdown-menu span');

    let ingredientsArray = [];
    let appareilsArray = [], applianceArray = [];
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
                if(!filtersArray.includes(tagName) && ingredientsArray.includes(tagName)) { filtersArray.push(tagName)}
                if(!filtersArray.includes(tagName) && ustensilsArray.includes(tagName)) { filtersArray.push(tagName)}
                if(!filtersArray.includes(tagName) && appareilsArray.includes(tagName)) { filtersArray.push(tagName); applianceArray.push(tagName)}
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
                    //Réintiialise la liste pour éviter les bugs
                    let filterAll = [];
                 
                            for(let i = 0; i < resultsArray.length; i++) {
                                for(let j = 0; j < resultsArray[i].ingredients.length; j++) {
                                    for(let k = 0; k < resultsArray[i].ustensils.length; k++) {
                                        for(let tag of filtersArray) {
                                            if(resultsArray[i].appliance == tag ||
                                                resultsArray[i].ingredients[j].ingredient == tag ||
                                                resultsArray[i].ustensils[k] == tag) {
                                                filterAll.push(resultsArray[i]);
    
                                            }
                                        }
                                    }
                                }
                            }
                            clearPage(); addRecipes(removeDuplicate(filterAll, 'id')); ifEmpty(removeDuplicate(filterAll, 'id'))
                            
                    
                
                    //Cas 2 : l'utilisateur choisit d'abord un filtre
                } else if (filtersArray.length > 0 && resultsArray.length == 0) {

                    for(let tag of filtersArray) {
                        for(let i = 0; i < recipes.length; i++) {
                            for(let j = 0; j < recipes[i].ingredients.length; j++) {
                                for(let k = 0; k < recipes[i].ustensils.length; k++) {
                                    if(!filterAll.includes(recipes[i])) {
                                        if(recipes[i].ingredients[j].ingredient.indexOf(tag) >= 0 || recipes[i].ustensils[k].indexOf(tag) >= 0 || recipes[i].appliance.indexOf(tag) >= 0) {
                                            filterAll.push(recipes[i]);
                                      }
                                    }                      
                                }
                            }
                        }
                        
                    }

                    for(let tag of filtersArray) {
                        for(let i = 0; i < filterAll.length; i++) {
                            for(let j = 0; j < filterAll[i].ingredients.length; j++) {
                                if(applianceArray.length > 0 && filterAll[i].appliance.indexOf(tag) >= 0 ) {
                                    console.log(filterAll[i].appliance.indexOf(tag), filterAll[i])
                                }
                            }
                            
                        }
                    }
                    //console.log(removeDuplicate(filterAll, 'id'))



                    
                    clearPage(); addRecipes(removeDuplicate(filterAll, 'id'))
                    /*for(let i = 0; i < recipes.length; i++) {
                        for(let j = 0; j < recipes[i].ingredients.length; j++) {
                            for(let k = 0; k < recipes[i].ustensils.length; k++) {
                                for(let tag of filtersArray) {
                                    if(recipes[i].appliance == tag ||
                                        recipes[i].ingredients[j].ingredient == tag ||
                                        recipes[i].ustensils[k] == tag) {
                                            filterAll.push(recipes[i]);
                                            console.log(filterAll)
                                            for(let recipe of filterAll) {
                                                //console.log(recipes[i].ingredients[j].ingredient.indexOf(tag), recipe)
                                                if( recipes[i].ingredients[j].ingredient.indexOf(tag) < 0) { console.log("suppr : ", recipe)}
                                               
                                            }
                                             
                                        }
                                    }
                                }
                            }
                        }
                        clearPage(); addRecipes(removeDuplicate(filterAll, 'id')); ifEmpty(removeDuplicate(filterAll, 'id'))*/
                }
            
            removeTag(tagList);
        }
        tags[i].addEventListener('click', addTags)
    }
}