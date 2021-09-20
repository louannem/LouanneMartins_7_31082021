import { recipes } from "../data/recipes";
import { Recipe } from "../components/Recipe";
import ingredientsList from "./dropdownLists";
import { Ingredient } from "../components/Ingredient";

export let filteredObjt;
export default function searchFunction() {

    let recipesList = [];
    let recipesArray = [];
    let displayDefault = () => {

        for(let i = 0; i < recipes.length; i++) {
                //Displays the recipes
                recipesList = new Recipe(recipes[i]);
                recipesArray.push(recipesList);
                document.getElementById('search-results').innerHTML += recipesList.diplayRecipe();
        }
    }
    displayDefault();


    const input = document.getElementById('search-input');
    let recipesSearch = [];
    for(let i = 0; i < recipes.length; i ++) { recipesSearch.push(recipes[i])}
        input.addEventListener ('keyup', () => {
            const searchInput = input.value.toLowerCase();
            filteredObjt = recipesSearch.filter(recipe => {
                return(
                    recipe.name.toLowerCase().includes(searchInput) ||
                    recipe.description.toLowerCase().includes(searchInput) 
                )
            });

            for(let i = 0; i < recipes.length; i++) {
                for(let j = 0; j< filteredObjt.length; j++) {
                    if(recipes[i].id == filteredObjt[j].id) { 
                        displayRecipes(filteredObjt);

                        //Display the ingredients for each recipes found
                        for(let i = 0; i < filteredObjt.length; i++){
                            let ingredientsBlock = document.getElementById(filteredObjt[i].id);
                            for(let j = 0; j < filteredObjt[i].ingredients.length; j ++) {
                                let ingredientsList = new Ingredient(filteredObjt[i].ingredients[j]);
                                ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
                            }
                        } 
                    }  else  { document.getElementById("recipe-"+recipes[i].id).style.display=""; }
                }
            }            
        });
    




    const displayRecipes = (recipes) => {
        const htmlString = recipes
            .map((recipe) => {
                return `
                <article class="recipe__card" id="recipe-${recipe.id}">
                <div class="recipe__image">
                    <img src="" alt="">
                </div>
                <div class="recipe__info">
                    <div class="recipe__title">
                        <h2>${recipe.name}</h2>
                        <div class="recipe__time">
                            <img src="../dist/clock.bdc9bc77.svg" alt="">
                            <span>${recipe.time} min.</span>
                        </div>
                    </div>
                    <div class="recipe__meta">
                        <div class="ingredients">
                           <ul id="${recipe.id}">
                           </ul>
                        </div>
                        <div class="instructions">
                            <p>${recipe.description}</p>
                        </div>
                    </div>
                </div>
            </article>
            `;
            })
            .join('');
            document.getElementById('search-results').innerHTML = htmlString;
    };







    let ingredientInput = document.getElementById('ingredient-input');
    let appareilsInput = document.getElementById('appareils-input');

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
