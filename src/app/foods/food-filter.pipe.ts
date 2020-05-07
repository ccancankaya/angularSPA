import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Food[], filterText?: string): Food[] {

    filterText=filterText?filterText.toLocaleLowerCase():null
    
    return filterText?value.filter((f:Food)=>f.name.toLocaleLowerCase().
    indexOf(filterText)!==-1):value;
  }

}
