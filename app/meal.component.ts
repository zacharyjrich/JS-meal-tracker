import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
    <div>
      <h4>Meal:</h4>
      <div class="meal-display">
        <p>Name: {{ meal.name }}</p>
        <p>Calories: {{ meal.calories }}</p>
        <p>Details: {{ meal.details }}</p>
      </div>
    </div>
  `
})

export class MealComponent {
    @Input() meal: Meal;
}
