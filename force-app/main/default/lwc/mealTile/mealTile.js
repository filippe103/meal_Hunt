import { LightningElement, api } from 'lwc';

export default class MealTile extends LightningElement {
    @api meal;

    recipeHandler(){
        let myCustomEvent = new CustomEvent('recipe', {
            detail: this.meal.idMeal
        })
        this.dispatchEvent(myCustomEvent);
    }
}