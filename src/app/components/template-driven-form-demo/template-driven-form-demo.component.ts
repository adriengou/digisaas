import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.scss']
})
export class TemplateDrivenFormDemoComponent implements OnInit {

  private _powers!:string[]
  private _model!:Hero
  private _submitted!:boolean

  constructor() {
    this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer']
    this.model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet')
    this.submitted = false;
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.submitted = true;
    console.log("SUBMIT");
  }

  newHero(){
    this.model = new Hero(42, '', '');
  }

  public get powers(): string[] {
    return this._powers;
  }

  public set powers(powers: string[]) {
      this._powers = powers;
  }

  public get model(): Hero {
      return this._model;
  }

  public set model(model: Hero) {
      this._model = model;
  }

  public get submitted(): boolean {
      return this._submitted;
  }

  public set submitted(submitted: boolean) {
      this._submitted = submitted;
  }
}
