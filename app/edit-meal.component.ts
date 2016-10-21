import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit Selected Meal</h3>
      <div>
        <label>Name</label>
        <input [(ngModel)]="childSelectedMeal.name" class="form-control">
      </div>
      <div>
        <label>Calories</label>
        <input [(ngModel)]="childSelectedMeal.calories" class="form-control">
      </div>
      <div>
        <label>Details</label>
        <input [(ngModel)]="childSelectedMeal.details" class="form-control">
        <button class="btn btn-primary btn-block" id="button" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
