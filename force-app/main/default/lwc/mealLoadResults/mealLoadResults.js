import { LightningElement, api } from 'lwc';

export default class MealLoadResults extends LightningElement {
    @api mealResult = [];
    selectedMeal;
    showModal = false;

    get checkMeals(){
        return typeof(this.mealResult) != 'undefined' && this.mealResult.length > 0;
    }

    recipeHandler(event){
        let selectedMeailId = event.detail;
        console.log('selectedMeailId', selectedMeailId);

        this.selectedMeal = this.mealResult.find(currItem => currItem.idMeal === selectedMeailId);
        console.log('selectedMeal', this.selectedMeal);
        this.showModal = true;
    }

    closeHandler(){
        this.showModal = false;
    }
}