import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdateToAge',
  pure: false,
})
export class BirthdateToAgePipe implements PipeTransform {

  transform(birthdate:Date): number {
    //today date
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear()
    return age;
  }

}
