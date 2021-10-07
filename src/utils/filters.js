import { recipes } from "../data/recipes";
import { resultsArray } from "./search";
import clearPage from "./clearPage";
import addRecipes from "./addRecipes";
import removeTag from "./removeTag";
import { ingredientsFilters, applianceFilters, ustensilsFilters } from "../app";

export let tagList, filtersArray = [];

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
            //tagList = document.getElementsByClassName('added-tag');
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
                if(!filtersArray.includes(tagName) && appareilsArray.includes(tagName)) { filtersArray.push(tagName)}
             }

            //Fonction pour vérifier si une liste est vide
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

            console.log(filtersArray)

            //Filtre les résultats selon les nouvelles listes de filtres
             //Départ avant l'ajout d'un tag : toutes les listes de filtres sont vides

///////////////////Filtre avec liste unique////////////////////////////////////////////////////////////
                //Cas 1 : l'utilisateur a utilisé la barre de recherche
                if(filtersArray.length > 0 && resultsArray.length > 0) {
                    const filterAll = resultsArray.filter((recipe) => {
                        return (recipe.ingredients.some((ingredients) => {
                            return filtersArray.every((tag) => {
                                return tag == ingredients.ingredient
                            })
                        }) ||
                        recipe.ustensils.some((ustensils) => {
                            return filtersArray.every((tag) => {
                                return tag == ustensils
                            })
                        }) ||
                        filtersArray.every((tag) => {
                            return tag == recipe.appliance
                        })
                        )
                    })
                    clearPage(filterAll); addRecipes(filterAll); ifEmpty(filterAll);
                
                    //Cas 2 : l'utilisateur choisit d'abord un filtre
                } else if (filtersArray.length > 0 && resultsArray.length == 0) {
                    const filterAll = recipes.filter((recipe) => {
                        return (recipe.ingredients.some((ingredients) => {
                            return filtersArray.some((tag) => {
                                return tag == ingredients.ingredient
                            })
                        }) ||
                        recipe.ustensils.some((ustensils) => {
                            return filtersArray.every((tag) => {
                                return tag == ustensils
                            })
                        }) ||
                        filtersArray.every((tag) => {
                            return tag == recipe.appliance
                        })
                        )
                    });
                    clearPage(filterAll); addRecipes(filterAll);  ifEmpty(filterAll);
                }  
            removeTag(addedTags);
        }
        tags[i].addEventListener('click', addTags)
    }
}