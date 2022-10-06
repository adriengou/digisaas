import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersAverage',
  pure:false
})
export class NumbersAveragePipe implements PipeTransform {

  transform(value: number[]): number {
    let sum = value.reduce((prev, curr)=> prev + curr)
    return sum/value.length;
  }
}
