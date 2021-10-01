import { recipes } from "../data/recipes";
import { Recipe } from "../components/Recipe";
import addIngredients from "../utils/addRecipes";
import updateDropdowns from "../utils/addRecipes";
import clearPage from "../utils/clearPage";


//Liste des recettes recherchées à récupérer et filtrer
export let resultsArray = [];


export default function searchFunction() {

    //Si aucune recette n'a été recherchée
    //On affiche l'ensemble de la liste de recettes
    if(resultsArray.length == 0) {
        for(let recipe of recipes){
            let recipesList = new Recipe(recipe);
            document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();

            //Ajoute les ingrédients
            addIngredients(recipes)
            //Ajoute les dropdowns
            updateDropdowns(recipes);
        }
    }


    const input = document.getElementById('search-input');
    
    let globalSearch = () => {
        const searchInput = input.value.toLowerCase();
        
        if(searchInput.length > 2) {
            resultsArray = recipes.filter(recipe => {
                return(
                    recipe.name.toLowerCase().includes(searchInput) ||
                    recipe.description.toLowerCase().includes(searchInput) 
                )
            });
            if(resultsArray.length > 0) {
                //Afficher les recettes ici
                clearPage(); 
                for(let recipe of resultsArray) { 
                    document.getElementById('no-result').style.display = "none";
                    let newRecipe = new Recipe(recipe);
                    document.getElementById('search-results').innerHTML += newRecipe.diplayRecipe();
                    addIngredients(resultsArray); updateDropdowns(resultsArray)
                }
            } else if (resultsArray.length == 0){
                //Afficher qu'aucune recette n'a été trouvée
                clearPage();
                document.getElementById('no-result').style.display = "inline";
                document.getElementById('no-result').innerText = "Aucune recette n'a été trouvée."

            }
            //Si l'utilisateur supprime les caractères, on remet toute les recettes
        } else if (searchInput.length < 3) {
            for(let recipe of recipes){
                let recipesList = new Recipe(recipe);
                document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();
    
                //Ajoute les ingrédients
                addIngredients(recipes)
                //Ajoute les dropdowns
                updateDropdowns(recipes);
            }
        }
    }
    input.addEventListener('input', globalSearch);

     //Filter each list
     let filterList = (input, listID) => {
        let searchInput, listName, ElementSpan, text;

        searchInput = input.value.toLowerCase();
        listName = document.getElementById(listID);
        ElementSpan = document.getElementsByTagName('.dropdownspan');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText.toLowerCase() || ElementSpan[i].textContent.toLowerCase();

            if(text.indexOf(searchInput) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display = "none"}
        }
    }


     //Filter results arrays
     let arrayFilter = (arrayName) => {
        for(let i = 0; i < arrayName.length; i++) {
            for(let j = 0; j < arrayName.length; j++) {
                if(arrayName[i].name == arrayName[j].name && i != j) { arrayName.splice(i, i+1)}
            }
        }
    }

    let ingredientInput = document.getElementById('ingredient-input');
    let appareilsInput = document.getElementById('appareils-input');
    let ustensilesInput = document.getElementById('ustensiles-input');


    let ingredientsSearch = () => {
        filterList(ingredientInput, 'ingredients-list');
    }
    ingredientInput.addEventListener('input', ingredientsSearch);


    let appareilsArray=[];
    let appareilsSearch = () => {
        filterList(appareilsInput, 'appareils-list');
    }
    appareilsInput.addEventListener('input', appareilsSearch);

    let ustensilesSearch = () => {         
        filterList(ustensilesInput, 'ustensiles-list');
    }
    ustensilesInput.addEventListener('input', ustensilesSearch);

}

