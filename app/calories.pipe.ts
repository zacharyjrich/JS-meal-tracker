import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "calories",
  pure: false //stateful. true = stateless.
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], desiredCalorieView){
    var output: Meal[] = [];
    if (desiredCalorieView === "<500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 499) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCalorieView === ">500") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
