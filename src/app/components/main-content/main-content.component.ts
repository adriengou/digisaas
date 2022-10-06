import { Component, OnInit, NgModule, ElementRef, ViewChild} from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { NumberArrayService } from 'src/app/services/number-array.service';



@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  cardsData: Job[] = []
  numberArray = [23, 2, 55, 88, 4]
  birthdate = new Date();
  @ViewChild('birthdateInput', { static: true }) birthdateInput!: ElementRef;

  constructor(private service: NumberArrayService) {
    // this.cardsData.push(new Job('default.png', 'Spotify', 4.8, 'Senior UI/UX', 5000, 'New-Yor, USA'))
    // this.cardsData.push(new Job('default.png', 'Google', 4.5, 'Senior UI/UX Designer', 100000, 'New-Yor, USA'))
    // this.cardsData.push(new Job('default.png', 'Youtube', 4.8, 'Senior UI/UX Designer', 5000, 'New-Yor, USA'))
    // this.cardsData.push(new Job('default.png', 'share', 5, 'Senior Web', 10000, 'Annemase'))
  }

  ngOnInit(): void {
  }

  changeNumber(index:number){
    this.numberArray[index] = Math.floor(Math.random() * 100);
    this.service.changeNumbers(this.numberArray);
  }

  setDate(){
    let inputDate = this.birthdateInput.nativeElement.value;

    if (inputDate) {
      this.birthdate = new Date(inputDate)
    }
  }

}

//directive pour supprimer un élément
// class jobs.ts dans models
// exporter une classe avec ses attributs