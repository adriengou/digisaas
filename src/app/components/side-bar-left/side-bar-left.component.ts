import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss'],
})
export class SideBarLeftComponent implements OnInit {
  private _average!: number[];

  constructor() {}

  ngOnInit(): void {}

  public get average(): number[] {
    return this._average;
  }

  public set average(average: number[]) {
    this._average = average;
  }
}
