import { Component, OnInit } from '@angular/core';
import { NumberArrayService } from 'src/app/services/number-array.service';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {
  private _average!:number[]



  constructor(private service: NumberArrayService) {

  }

  ngOnInit(): void {
    this.service.numbers$.subscribe((val) => {
      this.average = val
      console.log("val: " + val, "average: " + this.average);
    });
    // ({
    //   next: value=>{
    //     let sum = value.reduce((prev:number, curr:number)=> prev + curr )
    //     this._average = sum/value.length;
    //   }
    // })
  }

  public get average(): number[] {
    return this._average;
  }

  public set average(average: number[]) {
    this._average = average;
  }


}
