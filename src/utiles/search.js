//Search algo with for loop
import { recipes } from "../data/recipes"
import { Recipe } from "../components/Recipes";
import addRecipes from "./addRecipes";
import updateDropdowns from "./addRecipes" 

export const recipesArray = [];
export let resultsArray = [];
export default function searchFunction(){
    let input = document.getElementById('search-input');
    let ingredientInput = document.getElementById('ingredient-input');
    let appareilsInput = document.getElementById('appareils-input');

    
    for(let i = 0; i < recipes.length; i++) {
            //Displays the recipes
            let recipesList = new Recipe(recipes[i]);
            recipesArray.push(recipesList);
            document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();
    }
    
    let globalSearch = (searchItem) => {
        searchItem = input.value.toLowerCase();

        for(let i = 0; i<recipes.length; i++) {
            let recipesID = document.getElementById("recipe-"+ recipes[i].id);

            //Lance la recherche à partir de 3 caractères ou affiche toutes les recettes si < 3
            if(searchItem.length >= 3) {
                let recipeName = recipes[i].name.toLowerCase();
                let newRecipes;
                //La recherche comprend le nom de la recette, les appareils et la description
                if(recipeName.includes(searchItem) || recipes[i].appliance.includes(searchItem) || recipes[i].description.includes(searchItem)) {
                    newRecipes = new Recipe(recipes[i]);
                    resultsArray.push(newRecipes);
                    recipesArray.push(newRecipes);
                    }  else { recipesID.style.display = "none" ; }
            

            } else { recipesID.style.display = ""; }      
        }
        return resultsArray
    }   
    input.addEventListener('input', globalSearch);




    //Filter each list
    let filterList = (input, listID) => {
        let searchInput, ustensilesList, ElementSpan, text;

        searchInput = input.value.toLowerCase();
        ustensilesList = document.getElementById(listID);
        ElementSpan = ustensilesList.getElementsByTagName('span');

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



    let ingredientsArray = [];

    let ingredientsSearch = () => {
        filterList(ingredientInput, 'ingredients-list');
        arrayFilter(ingredientsArray);
    }
    ingredientInput.addEventListener('input', ingredientsSearch);


    let appareilsArray = [];
    let appareilsSearch = () => {
        filterList(appareilsInput, 'appareils-list');
        for(let j = 0; j < recipes.length; j++) {
            let applianceTest = recipes[j].appliance.toLowerCase();
            let searchInput = appareilsInput.value.toLowerCase();
            let filteredRecipe;
            if(applianceTest.includes(searchInput)) {
                filteredRecipe = new Recipe(recipes[j]);
                appareilsArray.push(filteredRecipe);
            } else {   }
        }
        arrayFilter(appareilsArray);
        console.log("Appareils : ", appareilsArray)
    }
    appareilsInput.addEventListener('input', appareilsSearch);
    


    let ustensilesArray = [];
    let ustensilesInput = document.getElementById('ustensiles-input');

    let ustensilesSearch = () => {         
        filterList(ustensilesInput, 'ustensiles-list');

        for(let j = 0; j < recipes.length; j++) {          
            for(let k = 0; k < recipes[j].ustensils.length; k++) {
                if(ustensilesInput.length == 0) {
                    ustensilesArray = []
                } else {
                    let ustensilesTest = recipes[j].ustensils[k].toLowerCase();
                    let searchInput = ustensilesInput.value.toLowerCase();
                    if(ustensilesTest.includes(searchInput) ) {
                        let filteredRecipes = new Recipe(recipes[j]);
                        ustensilesArray.push(filteredRecipes);
                    } else {  }
                }
            }
        }
    }
    ustensilesInput.addEventListener('input', ustensilesSearch);

}