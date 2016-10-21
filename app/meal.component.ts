import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  template: `
    <div>
    <p>{{ meal.name }} {{ meal.calories }} {{ meal.details }}</p>
    </div>
  `
})

export class MealComponent {
    @Input() meal: Meal;
}
