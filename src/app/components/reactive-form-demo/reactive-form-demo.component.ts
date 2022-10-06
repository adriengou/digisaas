import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  name = new FormControl('')
  constructor() { }

  ngOnInit(): void {
  }

  updateName(){
    this.name.setValue("Fouad")
  }
}
