import { recipes } from "../data/recipes";

export default function ingredientsList() {
    let ingredientArray = [];
    let ustensilesArray = [];
    let appareilsArray = [];
    for(let i = 0; i<recipes.length; i++) {
        for(let j = 0; j < recipes[i].ingredients.length; j ++) {   ingredientArray.push(recipes[i].ingredients[j].ingredient); }
        for(let k = 0; k < recipes[i].ustensils.length; k++) {  ustensilesArray.push(recipes[i].ustensils[k]);  }
        for(let l = 0; l < recipes[i].appliance.length; l++)  {appareilsArray.push(recipes[i].appliance[l]);}   
    }

    let ingredientDuplicate = ingredientArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); })
    let ustensilesDuplicate = ustensilesArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); });
    let appareilsDuplicate = ustensilesArray.filter(function(elem, index, self) {   return index === self.indexOf(elem); });
    let ingredientsBlock = document.getElementById('ingredients-list');
    let ustensilesBlock = document.getElementById('ustensiles-list');
    let appareilsBlock = document.getElementById('appareils-list');

    for(let i = 0; i <= 30; i++) {
        ingredientsBlock.innerText += ingredientDuplicate[i];
        ustensilesBlock.innerText += ustensilesDuplicate[i];
        appareilsBlock.innerText += appareilsDuplicate[i];
    }
} 