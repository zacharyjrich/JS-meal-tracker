import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NewMealComponent } from './new-meal.component';
import { MealComponent} from './meal.component';
import { MealListComponent } from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { CaloriesPipe } from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
     AppComponent,
     NewMealComponent,
     MealComponent,
     MealListComponent,
     EditMealComponent,
     CaloriesPipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
