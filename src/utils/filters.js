import { recipes } from "../data/recipes";
import {resultsArray} from "../utils/search";
import clearPage from "../utils/clearPage";
import addRecipes from "../utils/addRecipes";
import addIngredients from "../utils/addRecipes";
import updateDropdowns from "../utils/addRecipes";
import removeTag from "../utils/removeTag";




export let ingredientsOnly2 = [], tagList, filtersArray = [];

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
        let addTag = () => {
            //Listes de filtres par catégorie
            let ingredientsFilters = [];
            let ustensilsFilters = [];
            let appliancesFilters = [];

            //Filtre les doublons des résultats de recherche
            const filteredRecipe = resultsArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); })

       

            //Adds the new tag 
            let newTag = document.createElement('span');
            newTag.classList.add('added-tag');
            newTag.innerText = tags[i].innerText;
            document.getElementById('added-tags').appendChild(newTag);
            let addedTags = document.querySelectorAll('.added-tag');
            tagList = document.getElementsByClassName('added-tag');
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
                if(!ingredientsFilters.includes(tagName) && ingredientsArray.includes(tagName)) { ingredientsFilters.push(tagName); filtersArray.push(tagName)}
                if(!ustensilsFilters.includes(tagName) && ustensilsArray.includes(tagName)) { ustensilsFilters.push(tagName); filtersArray.push(tagName)}
                if(!appliancesFilters.includes(tagName) && appareilsArray.includes(tagName)) { appliancesFilters.push(tagName); filtersArray.push(tagName)}
             }


             let ifEmpty = (arrayName) => {
                 let noResult = document.getElementById('no-result');
                 if(arrayName.length == 0) { 
                     noResult.innerText = "Pas de recette trouvée.";
                     noResult.style.display = "inline"
                    } else if (arrayName.length > 0) {
                        noResult.style.display = "none";
                    }
             }

             //Filtre les résultats selon les nouvelles listes de filtres
             //Départ avant l'ajout d'un tag : toutes les listes de filtres sont vides

///////////////////Filtre avec liste unique////////////////////////////////////////////////////////////
             if(filtersArray.length > 0) {
                const filterAll = filteredRecipe.filter((recipe) => {
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
                clearPage(filterAll); addRecipes(filterAll); addIngredients(filterAll); updateDropdowns(filterAll); ifEmpty(filterAll);
               }
             

///////////////////////Filtres avec listes séparées/////////////////////////////////////////////////////////////

               //Cas 1 : si appareils et ustensils sont vide, on teste les ingrédients
            /*   if(appliancesFilters.length == 0 && ustensilsFilters.length == 0) {
                let ingredientsOnly = filteredRecipe.filter((recipe) => {
                    return recipe.ingredients.some((ingredients) => {
                         return filtersArray.every((tag) => {
                             if(tag == ingredients.ingredient) { ingredientsOnly2.push(recipe)}
                             return tag == ingredients.ingredient
                         })
                     })            
                });        
                clearPage(ingredientsOnly); addRecipes(ingredientsOnly); addIngredients(ingredientsOnly); updateDropdowns(ingredientsOnly); ifEmpty(ingredientsOnly)
               } 

               //Cas 2 : si ingrédients et appareils sont vides, on teste les ustensiles
               else if(ingredientsFilters.length == 0 && appliancesFilters.length ==0) {
                let ustensilsOnly = filteredRecipe.filter((recipe) => {
                    return recipe.ustensils.some((ustensils) => {
                         return filtersArray.some((tag) => {
                             return tag == ustensils
                         })
                     })
                
                });  
                clearPage(ustensilsOnly);   addRecipes(ustensilsOnly); addIngredients(ustensilsOnly); updateDropdowns(ustensilsOnly) ;ifEmpty(ustensilsOnly);
               } 


               //Cas 3 : si ingrédients et ustensils sont vides, on teste les appareils
               else if(ingredientsFilters.length == 0 && ustensilsFilters.length == 0) {
                const appliancesOnly = filteredRecipe.filter((recipe) => {
                    return filtersArray.every((tag) => {
                      return tag === recipe.appliance 
                    });
                  });
                clearPage(appliancesOnly); addRecipes(appliancesOnly); addIngredients(appliancesOnly);  //ifEmpty(appliancesOnly);
               }

               //Cas 4 : si ingrédients est vide, on teste les appareils et ustensils
               else if(ingredientsFilters.length == 0) {
                const appAndUst = filteredRecipe.filter((recipe) => {
                    return(
                        recipe.ustensils.some(ustensils => {
                            return filtersArray.some(tag => {
                                return ustensils == tag
                            })
                        }) &&
                        filtersArray.some(tag => {
                            return recipe.appliance == tag
                        })
                    )
                });
                clearPage(appAndUst); addRecipes(appAndUst); addIngredients(appAndUst); updateDropdowns(appAndUst); ifEmpty(appAndUst);
               }
            

               //Cas 5 : si appareils est vide, on teste les ingrédients et les ustensils
               else if (appliancesFilters.length == 0) {
                const ustpAndIngr = filteredRecipe.filter((recipe) => {
                    return(
                        recipe.ingredients.some(ingredients => {
                            return filtersArray.some(tag => {
                                return ingredients.ingredient == tag
                            })
                        }) &&
                        recipe.ustensils.some(ustensils => {
                            return filtersArray.some(tag => {
                                return ustensils == tag
                            })
                        })
                    )
                });

                clearPage(ustpAndIngr); addRecipes(ustpAndIngr); addIngredients(ustpAndIngr); updateDropdowns(ustpAndIngr); ifEmpty(ustpAndIngr);
               }
               

               //Cas 6 : si ustensils est vide, on teste les ingrédients et les appareils
               else if(ustensilsFilters.length == 0) {
                   const ingrAndApp = filteredRecipe.filter((recipe) => {
                       return(
                        recipe.ingredients.some(ingredients => {
                            return filtersArray.some(tag => {
                                return ingredients.ingredient.includes(tag)
                            })
                        }) &&
                        filtersArray.some((tag) => {
                            return tag == recipe.appliance
                        })
                       )
                   })

                    clearPage(ingrAndApp); addRecipes(ingrAndApp); addIngredients(ingrAndApp); updateDropdowns(ingrAndApp); ifEmpty(ingrAndApp);
               }


               //Cas 7 : aucune liste n'est vide
               else if (ingredientsFilters.length > 0 && appliancesFilters > 0 && ustensilsFilters > 0) {
                const filterAll = filteredRecipe.filter((recipe) => {
                    return (recipe.ingredients.some((ingredients) => {
                        return filtersArray.some((tag) => {
                            return tag == ingredients.ingredient
                        })
                    }) ||
                    recipe.ustensils.some((ustensils) => {
                        return filtersArray.some((tag) => {
                            return tag == ustensils
                        })
                    }) ||
                    filtersArray.some((tag) => {
                        return tag == recipe.appliance
                    })
                    )
                })
                clearPage(filterAll); addRecipes(filterAll); addIngredients(filterAll); updateDropdowns(filterAll); ifEmpty(filterAll);
               }    */
                    
               removeTag(tagList);
            }
            tags[i].addEventListener('click', addTag);
    }

}
