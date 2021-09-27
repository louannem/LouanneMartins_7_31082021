import { recipes } from "../data/recipes";
import {resultsArray} from "../utiles/search";
import clearPage from "../utiles/clearSearch";
import addRecipes from "../utiles/addRecipes";
import addIngredients from "../utiles/addRecipes";
import updateDropdowns from "../utiles/addRecipes";
import removeTag from "../utiles/removeTags";



let tagArray = [];
let applianceArray = [];
let ustensilesArray = [];
export let filtersArray = [], tagList;


export default function filtersFunction () {    
    let tags = document.querySelectorAll('.dropdown-menu span');
    let addedTags = document.querySelectorAll('.added-tag');
    let ingredientsArray = [];
    let appareilsArray = [];
    let ustensilsArray = [];
 
    //Crée les listes comparatives
    for(let j = 0; j < recipes.length; j++) {
        for(let k = 0; k < recipes[j].ingredients.length; k++) { ingredientsArray.push(recipes[j].ingredients[k].ingredient) }
        for(let k = 0; k < recipes[j].appliance.length; k++) { appareilsArray.push(recipes[j].appliance) }
        for(let k = 0; k < recipes[j].ustensils.length; k++) { ustensilsArray.push(recipes[j].ustensils[k]) }        
    }

   

    for(let i = 0; i < tags.length; i++) {
        let addTag = () => {

            //Creates and adds the new tag 
            let newTag = document.createElement('span');
            newTag.classList.add('added-tag');
            newTag.innerText = tags[i].innerText;
            document.getElementById('added-tags').appendChild(newTag);
            addedTags = document.querySelectorAll('.added-tag');
            tagList = document.getElementsByClassName('added-tag');
            //Adds icon
            let deleteIcon = document.createElement('img');
            for(let tag of addedTags) { tag.appendChild(deleteIcon)};
            const iconPath = require('../assets/delete.svg');
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
                 
            
            for(let j = 0; j < addedTags.length; j++) { 
                let tagName = addedTags[j].innerText;
                //Ajoute les filtres d'ingrédients
                if(!tagArray.includes(tagName) && ingredientsArray.includes(tagName)) {    tagArray.push(tagName); filtersArray.push(tagName);
                    //Ajoute les filtres d'appareils
                } else if (!applianceArray.includes(tagName) && appareilsArray.includes(tagName)) {  applianceArray.push(tagName); filtersArray.push(tagName);
                    //Ajoute les filtres d'ustensiles
                } else if (!ustensilesArray.includes(tagName) && ustensilsArray.includes(tagName)) { ustensilesArray.push(tagName); filtersArray.push(tagName);
                }

                if(filtersArray.includes(tags[i].innerText)) {tags[i].style.display = "none";} 
                else if (!filtersArray.includes(tags[i].innerText)) {tags[i].style.display = "inline";} 
                
            }

            clearPage();

            //Compare les ingredients pour chaque recette            
            let recipesDisplay = [];           

            filtersArray.forEach((elem) => {
                for(let i = 0; i < resultsArray.length; i++) {
                    for(let j = 0; j < resultsArray[i].ingredients.length; j++) {
                        for(let k = 0; k < resultsArray[i].ustensils.length; k++) {
                            if(resultsArray[i].ingredients[j].ingredient.includes(elem) ||
                            resultsArray[i].ustensils[k].includes(elem) ||
                            resultsArray[i].appliance.includes(elem)) {  recipesDisplay.push(resultsArray[i])  }
                            else if (!resultsArray[i].ingredients[j].ingredient.includes(elem) &&
                            !resultsArray[i].ustensils[k].includes(elem) &&
                            !resultsArray[i].appliance.includes(elem))  {
                                //Identifier les recettes en trop
                            }
                        }
                    }
                }
            });

            //Filtre les doublons
            const uniqueValuesSet = new Set();
            const filteredRecipes = recipesDisplay.filter((recipe) => {
                const isPresentInArray =  uniqueValuesSet.has(recipe.id);
                uniqueValuesSet.add(recipe.id);
                return !isPresentInArray;
            })

            //Displays the recipes with ingredients
            addRecipes(filteredRecipes); addIngredients(filteredRecipes); updateDropdowns(filteredRecipes);
            
            //Fonction de suppression + re-filtrage
            removeTag(tagList)
        }
        tags[i].addEventListener('click', addTag);
    }  

}