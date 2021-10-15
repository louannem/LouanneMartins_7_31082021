import { Ingredient } from "../components/Ingredient";
import filterFunction from "./filters";
import { filtersArray } from "./filters";

/**
 * Fonction pour afficher les recettes et mettre à jour les listes
 * @param {variable} recipes Variable contenant l'ensemble des recettes à afficher
 */
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
                            <div class="time-icon">
                            <img src="../assets/clock.svg"></img>
                            </div>
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

            //Ajoute les icones
            let iconBlock = document.querySelectorAll('.time-icon img');
            // eslint-disable-next-line no-undef
            const clockPath = require('../assets/clock.svg');
            for(let icon of iconBlock) { icon.setAttribute('src', clockPath);}




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
        /**
         * Supprime les doublons d'une liste
         * @param {string} list Liste à filtrer 
         * @returns Retourne la nouvelle liste filtrée
        */
        let removeDupl = (list) => {
            return list.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
        }
        let ingrDupl = removeDupl(ingrList); let appDupl = removeDupl(appList); let ustDupl = removeDupl(ustList);

        //Supprime les anciennes listes
        let oldLst = document.querySelectorAll('.dropdown-menu  span');
        for(let list of oldLst) { list.remove()} 

        /**
         * Fonction pour mettre à jour les listes des dropdowns
         * @param {string} list Liste à mettre à jour
         * @param {string} parentId Identifiant de l'element parent de la liste
        */
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


            /**
        * Fonction pour fitlrer les listes de dropdown avec les input
        * @param {string} input Input de la liste
        * @param {string} listID Liste à trier
        */
        // eslint-disable-next-line no-unused-vars
        let filterList = (input, listID) => {
            let searchInput, ElementSpan, text;

            searchInput = input.value.toLowerCase();
            ElementSpan = document.querySelectorAll('.dropdown-menu span');            
                       
            for(let i = 0; i < ElementSpan.length; i++) {
                text = ElementSpan[i].innerText.toLowerCase() || ElementSpan[i].textContent.toLowerCase();
                if(text.includes(searchInput) && searchInput.length > 0) {
                    ElementSpan[i].style.display="";
                    
        
                } else if(!text.includes(searchInput) && searchInput.length > 0) { ElementSpan[i].style.display="none"} 
                else if(searchInput.length == 0) { ElementSpan[i].style.display=""}
                
                if(text == "undefined") { ElementSpan[i].style.display="none"}
                }
            }


            let ingredientInput = document.getElementById('ingredient-input');
            let appareilsInput = document.getElementById('appareils-input');
            let ustensilesInput = document.getElementById('ustensiles-input');


            let ingredientsSearch = () => {
                filterList(ingredientInput, 'ingredients-list');
            }
            ingredientInput.addEventListener('input', ingredientsSearch);


            let appareilsSearch = () => {
                filterList(appareilsInput, 'appareils-list');
            }
            appareilsInput.addEventListener('input', appareilsSearch);

            let ustensilesSearch = () => {         
                filterList(ustensilesInput, 'ustensiles-list');
            }
            ustensilesInput.addEventListener('input', ustensilesSearch);


            //Ré-applique la fonction de filtre
            filterFunction();

}