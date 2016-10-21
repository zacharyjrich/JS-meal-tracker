import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Name</label>
        <input [(ngModel)]="childSelectedMeal.name">
      </div>
      <div>
        <label>Calories</label>
        <input [(ngModel)]="childSelectedMeal.calories">
      </div>
      <div>
        <label>Details</label>
        <input [(ngModel)]="childSelectedMeal.details">
        <button (click)="doneClicked()">Done</button>
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
