import { Ingredient } from "../components/Ingredient";
import filterFunction from "./filters";
import { filtersArray } from "./filters";

export default function addRecipes (recipes){

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
  



        //Display the ingredients for each recipes found
        for(let i = 0; i < recipes.length; i++){
            let ingredientsBlock = document.getElementById(recipes[i].id);
            for(let j = 0; j < recipes[i].ingredients.length; j ++) {
                let ingredientsList = new Ingredient(recipes[i].ingredients[j]);
                ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
            }
        } 



        let ingrList = [] ;
        let appList = [];
        let ustList = [];

        //Récupère les listes mises à jour
        for(let i = 0; i < recipes.length; i++) { 
            appList.push(recipes[i].appliance)
            for(let j = 0; j < recipes[i].ingredients.length; j++) { ingrList.push(recipes[i].ingredients[j].ingredient);}
            for(let k = 0; k < recipes[i].ustensils.length; k++) { ustList.push(recipes[i].ustensils[k]) }
        }
        let removeDupl = (list) => {  return list.filter(function(elem, index, self) {   return index === self.indexOf(elem); }) }
        let ingrDupl = removeDupl(ingrList); let appDupl = removeDupl(appList); let ustDupl = removeDupl(ustList);

        //Supprime les anciennes listes
        let oldLst = document.querySelectorAll('.dropdown-menu  span');
        for(let list of oldLst) { list.remove();} 

        //Réinjecte les listes
        let newList = (list, parentId) => {
            for(let i = 0; i < 30; i++) {
                let parentBlock = document.getElementById(parentId);
                let spanWrapper = document.createElement('span');
                parentBlock.appendChild(spanWrapper);
                spanWrapper.innerText += list[i];
                if(spanWrapper.innerText == "undefined" || filtersArray.includes(spanWrapper.innerText)) { spanWrapper.style.display="none"}
                
            }
        }
        newList(ingrDupl, 'ingredients-list') ; newList(appDupl, 'appareils-list', newList(ustDupl, 'ustensiles-list'));
        
        //Applique la fonction de filtre
        filterFunction();
    
}