import { Ingredient } from "../components/Ingredient";

export default function addRecipes (recipes){
    const displayRecipes = () => {
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

    displayRecipes(recipes)


    const addIngredients = () => {
        //Display the ingredients for each recipes found
        for(let i = 0; i < recipes.length; i++){
            let ingredientsBlock = document.getElementById(recipes[i].id);
            for(let j = 0; j < recipes[i].ingredients.length; j ++) {
                let ingredientsList = new Ingredient(recipes[i].ingredients[j]);
                ingredientsBlock.innerHTML += ingredientsList.displayIngredient();
            }
        } 
    }

    addIngredients(recipes)

}