// Root Component
import { Component } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'my-app',
  template: `
  <div class="container text-center">
    <h1>Meal Tracker</h1>
    <new-meal
    (newMealSender)="addMeal($event)"
    ></new-meal>
    <edit-meal
    [childSelectedMeal]="selectedMeal"
    (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <meal-list
    [childMealList]="masterMealList"
    (clickSender)="showDetails($event)"
    ></meal-list>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}
