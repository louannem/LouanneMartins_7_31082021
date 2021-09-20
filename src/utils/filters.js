import { recipes } from "../data/recipes";
import {filteredObjt} from "../utils/search";

let tagArray = [];
let applianceArray = [];
let ustensilesArray = [];
let filtersArray = [];


export default function filterFunction () {
    const collectedFilters = {
        ingredients:[],
        ustensils:[],
        appliances:[]
    }


    let tags = document.querySelectorAll('span');
    let addedTags = document.querySelectorAll('.added-tag');
    let ingredientsArray = [];
    let appareilsArray = [];
    let ustensilsArray = [];

    //Crée les listes comparatives
    for(let j = 0; j < recipes.length; j++) {
        for(let k = 0; k < recipes[j].ingredients.length; k++) { ingredientsArray.push(recipes[j].ingredients[k].ingredient) }
        for(let k = 0; k < recipes[j].appliance.length; k++) { appareilsArray.push(recipes[j].appliance) }
        for(let k = 0; k < recipes[j].ustensils.length; k++) { ustensilsArray.push(recipes[j].ustensils[k]) }        
    }

   

    for(let i = 0; i < tags.length; i++) {
        let addTag = () => {
            //Adds the new tag 
            let newTag = document.createElement('span');
            newTag.classList.add('added-tag');
            newTag.innerText = tags[i].innerText;
            document.getElementById('added-tags').appendChild(newTag);
            addedTags = document.querySelectorAll('.added-tag');


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

        }
        tags[i].addEventListener('click', addTag);
    }
        
}
