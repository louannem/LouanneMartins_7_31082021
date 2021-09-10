//Search algo with for loop

import { recipes } from "../data/recipes"
import { Recipes } from "../components/Recipes";
import ingredientsList from "./dropdownLists";

export default function searchFunction(){
    let input = document.getElementById('search-input');
    let ingredientInput = document.getElementById('ingredient-input');
    let appareilsInput = document.getElementById('appareils-input');
    let ustensilesInput = document.getElementById('ustensiles-input');

    let resultsArray = [];
    
    let globalSearch = (searchItem) => {
        searchItem = input.value;

        for(let i = 0; i<recipes.length; i++) {
            let recipesID = document.getElementById("recipe-"+ recipes[i].id);

            //Lance la recherche àà partir de 3 caractères ou affiche toutes les recettes si < 3
            if(searchItem.length >= 3) {
                //La recherche comprend le nom de la recette, les appareils et la description
                if(recipes[i].name.includes(searchItem) || recipes[i].appliance.includes(searchItem) || recipes[i].description.includes(searchItem)) {
                   
                    }  else { recipesID.style.display = "none" ;  }

            } else { recipesID.style.display = ""; }
        }
    }
    input.addEventListener('input', globalSearch);


    let ingredientsSearch = () => {
        let searchIngredient, ingredientList, ElementSpan, text;

        searchIngredient = ingredientInput.value;
        ingredientList = document.getElementById('ingredients-list');
        ElementSpan = ingredientList.getElementsByTagName('span');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText || ElementSpan[i].textContent;

            if(text.indexOf(searchIngredient) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display = "none"}
        }

        let ingredientsArray = [];
        for(let j = 0; j < recipes.length; j++) { 
            for(let k = 0; k < recipes[j].ingredients.length; k++) {
                if(recipes[j].ingredients[k].ingredient.includes(searchIngredient) ) {
                    let filteredRecipe = new Recipes(recipes[j]);
                    ingredientsArray.push(filteredRecipe);
                    
                } else {  
                                       
                 }
            }
        }
        console.log("Ingrédients : ", ingredientsArray);
    }
    ingredientInput.addEventListener('input', ingredientsSearch);


    let appareilsSearch = () => {
        let searchInput, appareilsList, ElementSpan, text;

        searchInput = appareilsInput.value;
        appareilsList = document.getElementById('appareils-list');
        ElementSpan = appareilsList.getElementsByTagName('span');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText || ElementSpan[i].textContent;

            if(text.indexOf(searchInput) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display = "none";}
        }


        let appareilsArray = []
        for(let j = 0; j < recipes.length; j++) {
            
            if(recipes[j].appliance.includes(searchInput) ) {
                let filteredRecipe = new Recipes(recipes[j]);
                appareilsArray.push(filteredRecipe);
            } else {   }
        }
        console.log("Appareils : ", appareilsArray)
    }
    appareilsInput.addEventListener('input', appareilsSearch);
    
    let ustensilesSearch = () => {
        let searchInput, ustensilesList, ElementSpan, text;

        searchInput = ustensilesInput.value;
        ustensilesList = document.getElementById('ustensiles-list');
        ElementSpan = ustensilesList.getElementsByTagName('span');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText || ElementSpan[i].textContent;

            if(text.indexOf(searchInput) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display = "none"}
        }


        let ustensilesArray = [];
        for(let j = 0; j < recipes.length; j++) {
           
            for(let k = 0; k < recipes[j].ustensils.length; k++) {
                if(recipes[j].ustensils[k].includes(searchInput) ) {
                    let filteredRecipe = new Recipes(recipes[j]);
                    ustensilesArray.push(filteredRecipe);
                    
                } else {   }
            }
        }
        console.log("Ustensiles : ", ustensilesArray);
    }
    ustensilesInput.addEventListener('input', ustensilesSearch);

}