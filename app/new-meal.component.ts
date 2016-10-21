import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <h3>Enter a new meal</h3>
  <div class="meal-form">
    <div>
      <label>Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Calories:</label>
      <input #newCalories>
    </div>
    <div>
      <label>Details:</label>
      <input #newDetails>
    </div>
    <div>
    <button class="btn btn-primary" (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add Meal</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string) {
  var newMealToAdd: Meal = new Meal(name, calories, details);
  this.newMealSender.emit(newMealToAdd);
  }
}
