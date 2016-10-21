import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <div class="col-md-3 col-md-offset-2">
    <h3>Enter a new meal</h3>
    <div>
      <label>Name</label>
      <input #newName type="text" class="form-control">
    </div>
    <div>
      <label>Calories</label>
      <input #newCalories type="text" class="form-control">
    </div>
    <div>
      <label>Details</label>
      <input #newDetails type="text" class="form-control">
    </div>
    <div>
      <button class="btn btn-primary btn-block" id="addMeal" (click)="
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
