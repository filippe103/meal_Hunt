import { LightningElement, api } from 'lwc';

export default class MealRecipeModal extends LightningElement {
    @api selectedMeal;

    clickHandler(){
        let myCustomEvent = new CustomEvent('closemodal');
        this.dispatchEvent(myCustomEvent);
    }
}