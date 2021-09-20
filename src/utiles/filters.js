import { recipes } from "../data/recipes";
import {recipesArray} from "../utiles/search";
import {resultsArray} from "../utiles/search";
import clearPage from "../utiles/clearSearch";
import { Recipe } from "../components/Recipes";
import { Ingredient } from "../components/Ingredients";

let tagArray = [];
let applianceArray = [];
let ustensilesArray = [];
let filtersArray = [];

export default function filtersFunction () {    
    let tags = document.querySelectorAll('span');
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
            //Adds the new tag 
            let newTag = document.createElement('span');
            newTag.classList.add('added-tag');
            newTag.innerText = tags[i].innerText;
            document.getElementById('added-tags').appendChild(newTag);
            addedTags = document.querySelectorAll('.added-tag');

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
                        if(elem == resultsArray[i].ingredients[j].ingredient) {
                            //Clear page and print new recipes
                            recipesDisplay.push(resultsArray[i]);
                            let ingredientsBlock = document.getElementById(recipes[i].id);

                            let ingredientsList = new Ingredient(recipes[i].ingredients[j]);
                            ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
                        } 

                    }

                    for(let k = 0; k < resultsArray[i].ustensils.length; k++) {
                        if(elem  == resultsArray[i].ustensils[k]) {
                            //Clear page and print new recipes
                            recipesDisplay.push(resultsArray[i]);
                        }
                    }


                    for(let l = 0; l < resultsArray[i].appliance.length; l++) {
                        if(elem  == resultsArray[i].appliance) {
                            //Clear page and print new recipes
                            recipesDisplay.push(resultsArray[i]);
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

            let updatedIngredients;
            let newIngrList = [];
            let newUstList = [];
            let newApplList = [];
            for(let i = 0; i < filteredRecipes.length; i++) {
                document.getElementById('search-results').innerHTML += filteredRecipes[i].diplayRecipe();
                
                for(let j = 0; j < filteredRecipes[i].ingredients.length; j++) {
                    updatedIngredients = filteredRecipes[i].ingredients;  
                    newIngrList.push(filteredRecipes[i].ingredients[j].ingredient);
                }      

                for(let k = 0; k < filteredRecipes[i].ustensils.length; k++) {
                    newUstList.push(filteredRecipes[i].ustensils[k]); 
                }

                for(let l = 0; l < filteredRecipes[i].appliance.length; l++) {
                    newApplList.push(filteredRecipes[i].appliance); 
                }
                
                //Filtre les doublons
                let ingredientDuplicate = newIngrList.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
                let ustensilsDuplicate = newUstList.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
                let applianceDuplicate = newApplList.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
                
                let ingredientsBlock = document.getElementById('ingredients-list');
                let ustensilesBlock = document.getElementById('ustensiles-list');
                let appareilsBlock = document.getElementById('appareils-list');

                //Actualise dropdown list
                for(let i = 0; i < ingredientDuplicate.length; i++) {
                    let ingredientsWrapper = document.createElement('span');
                    ingredientsBlock.appendChild(ingredientsWrapper);
                    ingredientsWrapper.innerText += ingredientDuplicate[i];
                }

                for(let i = 0; i < ustensilsDuplicate.length; i++) {
                    let ustensilsWrapper = document.createElement('span');
                    ustensilesBlock.appendChild(ustensilsWrapper);
                    ustensilsWrapper.innerText += ustensilsDuplicate[i];
                }

                for(let i = 0; i< applianceDuplicate.length; i++) {
                    let applianceWrapper = document.createElement('span');
                    appareilsBlock.appendChild(applianceWrapper);
                    applianceWrapper.innerText += ustensilsDuplicate[i];
                }
            }


        }
        tags[i].addEventListener('click', addTag);
    }

    for(let i = 0; i < addedTags.length; i++) {
        let removeTag = () => {
        console.log("remove");        
        }
        addedTags[i].addEventListener('click', removeTag)
    }   

}