import { recipes } from "../data/recipes";
import { Ingredient } from "../components/Ingredients";


export default function ingredientsList() {
    let ingredientArray = [];
    let ustensilesArray = [];
    let appareilsArray = [];

    for(let i = 0; i<recipes.length; i++) {
        for(let j = 0; j < recipes[i].ingredients.length; j ++) {
            let ingredientsBlock = document.getElementById(recipes[i].id);

            let ingredientsList = new Ingredient(recipes[i].ingredients[j]);
            ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
        }


        for(let j = 0; j < recipes[i].ingredients.length; j ++) {   ingredientArray.push(recipes[i].ingredients[j].ingredient); }
        for(let k = 0; k < recipes[i].ustensils.length; k++) {  ustensilesArray.push(recipes[i].ustensils[k]);  }
        appareilsArray.push(recipes[i].appliance); 
    }



    //Gets rid of duplicates
    let ingredientDuplicate = ingredientArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
    let ustensilesDuplicate = ustensilesArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); });
    let appareilsDuplicate = appareilsArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); });

    let ingredientsBlock = document.getElementById('ingredients-list');
    let ustensilesBlock = document.getElementById('ustensiles-list');
    let appareilsBlock = document.getElementById('appareils-list');


    let maxUstensiles = 30;
    for(let i = 0; i <= maxUstensiles; i++) {
        let ingredientsWrapper = document.createElement('span');
        let ustensilesWrapper = document.createElement('span');

        ingredientsBlock.appendChild(ingredientsWrapper);
        ustensilesBlock.appendChild(ustensilesWrapper);

        ingredientsWrapper.innerText += ingredientDuplicate[i];
        ustensilesWrapper.innerText += ustensilesDuplicate[i]
    }

    for(let i = 0; i <= 10; i++) {
        let appareilsWrapper = document.createElement('span');
        appareilsBlock.appendChild(appareilsWrapper);
        appareilsWrapper.innerText += appareilsDuplicate[i];
    }
        
} 