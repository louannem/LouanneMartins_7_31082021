import { Recipe } from "../components/Recipe";

 export default function clearPage(newRecipes) {
     let recipeRemove = () => {
         let toRemove = document.querySelectorAll('article');
         for(let article of toRemove) { article.remove()}     
        
     }
     recipeRemove()
 }