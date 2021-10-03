class Ingredient {
    constructor(object) {
        if(object.ingredient && !object.unit && !object.quantity) {
            return new NoUnitAndQuantity(object)
        }
        else if(!object.quantity) {
            return new NoQuantity(object)
        }
        else if (!object.unit) {
            return new NoUnit(object)
        }
        else {
            return new UnitAndQuantity(object)
        }
    }
}

class UnitAndQuantity {
    constructor(object) {
        this.ingredient = object.ingredient;
        this.unit = object.unit;
        this.quantity = object.quantity;
    }

    displayIngredient() {
        return `
            <li><span><strong>${this.ingredient} :</strong></span> <span>${this.quantity} ${this.unit}</span></li>
        `
    }

}

class NoQuantity {
    constructor(object) {
        this.ingredient = object.ingredient;
        this.unit = object.unit;
    }

    displayIngredient() {
        return `
            <li><span><strong>${this.ingredient} :</strong></span> <span> ${this.unit}</span></li>
        `
    }

}

class NoUnit {
    constructor(object) {
        this.ingredient = object.ingredient;
        this.quantity = object.quantity;
    }

    displayIngredient() {
        return `
            <li><span><strong>${this.ingredient} :</strong></span> <span> ${this.quantity}</span></li>
        `
    }
}

class NoUnitAndQuantity {
    constructor(object) {
        this.ingredient = object.ingredient
    }

    displayIngredient() {
        return `
            <li><span><strong>${this.ingredient}</strong></li>
        `
    }
}

export { Ingredient, NoQuantity, NoUnit, UnitAndQuantity, NoUnitAndQuantity}