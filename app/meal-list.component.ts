import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
    <h3>Meal List</h3>
      <div>
        <label>Calorie Filter:</label>
        <select (change)="onCalories($event.target.value)" class="filter form-control">
          <option value="all" selected="selected">All</option>
          <option value="<500">500 or less</option>
          <option value=">500">500 or greater</option>
        </select>
      </div>
      <div *ngFor="let currentMeal of childMealList | calories:selectedCaloriesView">
        <meal-display [meal]="currentMeal"
        ></meal-display>
        <button class="btn btn-primary" id="editbutton" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCaloriesView: string = "all";
  onCalories(optionCalories) {
    this.selectedCaloriesView = optionCalories;
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
