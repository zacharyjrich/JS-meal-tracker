import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col-md-3 col-md-offset-2">
    <h3>Meal List</h3>
      <div>
        <label>Calorie Filter:</label>
        <select class="form-control">
          <option>500 or less</option>
          <option>500 or greater</option>
        </select>
      </div>
      <div *ngFor="let currentMeal of childMealList">
        <meal-display [meal]="currentMeal"
        ></meal-display>
      </div>
    </div>
  `
})

export class MealListComponent {
    @Input() childMealList: Meal[];
}
