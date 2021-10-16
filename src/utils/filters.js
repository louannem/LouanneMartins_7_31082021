import { recipes } from "../data/recipes";
import { resultsArray } from "./search";
import clearPage from "./clearPage";
import addRecipes from "./addRecipes";
import removeTag from "./removeTag";
import updateFilters from "./updateFilters";


export let tagList, filtersArray = [], filterAll =[], trueNumb;
/**
 * Fonction pour filtrer les résultats
 */
export default function filterFunction () {
    // eslint-disable-next-line no-unused-vars
    let filtres = updateFilters();
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
        /**
         * Fonction pour ajouter un fitlre
         */
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
            for(let tag of addedTags) { tag.appendChild(deleteIcon)}
            // eslint-disable-next-line no-undef
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
                if(!filtersArray.includes(tagName)) { filtersArray.push(tagName);}
             }

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
             * Supprime les doublons d'une liste d'object selon un attribut
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
            

//////////////////////////////////////// Début des tris //////////////////////////////////////////////
                //Cas 1 : l'utilisateur a utilisé la barre de recherche
               
                if(filtersArray.length > 0 && resultsArray.length > 0) {
                    let filtersArray = updateFilters();

                    for(let recipe of resultsArray) { filterAll.push(recipe);  }
                    for(let k = 0; k < filterAll.length; k++) {
                        trueNumb = 0 ;
                                
                        for(let j = 0; j <= filtersArray.length; j++) {
                            if(filterAll[k].appliance == filtersArray[j]) {  trueNumb++; }

                            for(let i = 0; i < filterAll[k].ingredients.length; i++) {
                                if(filterAll[k].ingredients[i].ingredient == filtersArray[j]) { trueNumb++; } 
                            }

                            for(let l = 0; l < filterAll[k].ustensils.length; l++) {
                                if(filterAll[k].ustensils[l] == filtersArray[j]) { trueNumb++;  }
                            }
                        }
                    
                        if(trueNumb !== filtersArray.length) {  
                            //A supprimer de la liste
                            filterAll.splice(k,1); k--;
                        }                               
                    }
                clearPage(); addRecipes(removeDuplicate(filterAll, 'id')); ifEmpty(filterAll)
                    
                
                //Cas 2 : l'utilisateur choisit d'abord un filtre
                } else if (filtersArray.length > 0 && resultsArray.length == 0) {   
                    let filtersArray = updateFilters();
                    let filterAll = [];

                    for(let recipe of recipes) { filterAll.push(recipe);  }
                    for(let k = 0; k < filterAll.length; k++) {
                        trueNumb = 0 ;
                                
                        for(let j = 0; j <= filtersArray.length; j++) {
                            if(filterAll[k].appliance == filtersArray[j]) {  trueNumb++; }

                            for(let i = 0; i < filterAll[k].ingredients.length; i++) {
                                if(filterAll[k].ingredients[i].ingredient == filtersArray[j]) { trueNumb++; } 
                            }

                            for(let l = 0; l < filterAll[k].ustensils.length; l++) {
                                if(filterAll[k].ustensils[l] == filtersArray[j]) { trueNumb++;  }
                            }
                        }
                    
                        if(trueNumb !== filtersArray.length) {  
                            //A supprimer de la liste
                            filterAll.splice(k,1); k--;
                        }                               
                        clearPage(); addRecipes(filterAll); ifEmpty(filterAll);
                    }
                }
            removeTag(tagList);            
        }
        tags[i].addEventListener('click', addTags)
    }
}