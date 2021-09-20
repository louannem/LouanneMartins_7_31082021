export class Recipe {
    constructor(object) {
        this.name = object.name;
        this.time = object.time;
        this.description = object.description;
        this.id = object.id;
        this.ingredients = object.ingredients;
        this.appliance = object.appliance;
        this.ustensils = object.ustensils;
    }

    diplayRecipe() {
        return `
        <article class="recipe__card" id="recipe-${this.id}">
                <div class="recipe__image">
                    <img src="" alt="">
                </div>

                <div class="recipe__info">
                    <div class="recipe__title">
                        <h2>${this.name}</h2>
                        <div class="recipe__time">
                            <img src="../dist/clock.bdc9bc77.svg" alt="">
                            <span>${this.time} min.</span>
                        </div>
                    </div>

                    <div class="recipe__meta">
                        <div class="ingredients">
                           <ul id="${this.id}">
                           </ul>
                        </div>

                        <div class="instructions">
                            <p>${this.description}</p>
                        </div>
                    </div>
                </div>
            </article>
        `
    }
}

