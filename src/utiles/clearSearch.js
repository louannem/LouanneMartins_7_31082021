import {recipesArray} from "../utiles/search";
import {resultsArray} from "../utiles/search";

export default function clearPage() {
    let toRemove = document.querySelectorAll('article');
    toRemove.forEach((recipe) => {
        recipe.style.display = "none";
    })

    let ingredientsRemove = document.querySelectorAll('#ingredients-list span');
    let ustensilsRemove = document.querySelectorAll('#ustensiles-list span');
    let applianceRemove = document.querySelectorAll('#appareils-list span')
    ingredientsRemove.forEach((elem) => {
        elem.style.display="none";
    });
    ustensilsRemove.forEach((elem) => {
        elem.style.display="none";
    })
    applianceRemove.forEach((elem) => {
        elem.style.display="none";
    });
}