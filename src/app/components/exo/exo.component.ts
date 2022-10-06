import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exo',
  templateUrl: './exo.component.html',
  styleUrls: ['./exo.component.scss']
})
export class ExoComponent implements OnInit {

  @Input() num!:number;
  @Input() index!:number;
  @Input() isOdd!:boolean;
  @Output() reloadNumberEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  reloadNumber(){
    this.reloadNumberEvent.emit(this.index)
  }
}
