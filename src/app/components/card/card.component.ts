import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() data!:any;
  isActive: boolean = false;
  shown: boolean = true;
  flipValue: number = 0;
  flipStyle!: string;

  constructor() {
    console.log(this.data);
    this.changeBackground();
  }

  ngOnInit(): void {}

  onClick(): void {

  }

  changeBackground(): void {
    setTimeout(() => {
      this.isActive = true;
    }, 5000);
  }

  showCard(): void {
    this.shown = false;
  }

  flip() {
    this.flipValue = this.flipValue === 0 ? 180000 : 0;
    this.flipStyle = `rotateY(${this.flipValue}deg)`;
  }
}
