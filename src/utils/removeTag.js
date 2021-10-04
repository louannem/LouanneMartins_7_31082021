//Importation des listes générées par les filtres
import { recipes } from "../data/recipes";
import { filtersArray, tagList } from "./filters";
import { resultsArray } from "./search";
import addRecipes from "../utils/addRecipes";
import addIngredients from "../utils/addRecipes";
import updateDropdowns from "../utils/addRecipes";
import clearPage from "../utils/clearPage"



export default function removeTag(listName) {
    //Récupère la liste de tags
    
        for(let i = 0; i<listName.length; i++) { 
            //Supprime les tags
            listName[i].addEventListener('click', function(){
                //Trouver l'élément dans la liste de filtres
                for(let j = 0; j < filtersArray.length; j++) {
                    //Identifie le filtre dans la liste de filtre et le supprime
                    if(listName[i].innerText == filtersArray[j]) { filtersArray.splice(j, 1); }

                    //Si la liste = 0, on re-met toutes les recettes à partir de l'input
                    if(filtersArray.length == 0 && resultsArray.length > 0) {
                        clearPage();
                        let recipesSearch = [];
                        for(let i = 0; i < recipes.length; i ++) { recipesSearch.push(recipes[i])}
                        let search = document.getElementById('search-input').value.toLowerCase();
                        const filteredObjt = recipesSearch.filter(recipe => {
                            return(
                                recipe.name.toLowerCase().includes(search) ||
                                recipe.description.toLowerCase().includes(search) 
                            )
                        });
                        addRecipes(filteredObjt);
                        //Dans le cas où il n'y a aucune recherche de faite et que la liste de fitlre est vidée
                    }  else if(resultsArray.length == 0 && filtersArray.length == 0) {
                        clearPage(); addRecipes(recipes);
                    }
                    else {
                    //Sinon on re-filtre avec la liste 
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
                    clearPage(filterAll); addRecipes(filterAll);

                    
                    }
                }
                //Supprime le tag cliqué
                listName[i].remove();
                
            });
        }
    }