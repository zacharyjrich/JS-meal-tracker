import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template:`
  <div>
    <h3>Enter a new meal</h3>
    <div>
      <label>Name</label>
      <input required #newName type="text" class="form-control">
    </div>
    <div>
      <label>Calories</label>
      <input required #newCalories type="number" class="form-control">
    </div>
    <div>
      <label>Details</label>
      <input required #newDetails type="text" class="form-control">
    </div>
    <div>
      <button class="btn btn-primary btn-block" id="button" (click)="
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
