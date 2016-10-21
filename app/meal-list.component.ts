import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col-md-3 col-md-offset-2">
    <h3>Meal List</h3>
      <div>
        <label>Calorie Filter:</label>
        <select (change)="onCalories($event.target.value)" class="filter form-control">
          <option>500 or less</option>
          <option>500 or greater</option>
        </select>
      </div>
      <div *ngFor="let currentMeal of childMealList">
        <meal-display [meal]="currentMeal"
        ></meal-display>
        <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
