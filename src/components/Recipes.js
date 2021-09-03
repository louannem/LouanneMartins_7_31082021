export class Recipes {
    constructor(object) {
        this.name = object.name;
        this.time = object.time;
        this.description = object.description;
        this.id = object.id;
    }

    diplayRecipe() {
        return `
        <article class="recipe__card">
                <div class="recipe__image">
                    <img src="" alt="">
                </div>

                <div class="recipe__info">
                    <div class="recipe__title">
                        <h2>${this.name}</h2>
                        <div class="recipe__time">
                            <img src="./src/assets/clock.svg" alt="">
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

