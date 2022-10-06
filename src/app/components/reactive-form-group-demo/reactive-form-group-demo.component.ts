import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators , FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group-demo',
  templateUrl: './reactive-form-group-demo.component.html',
  styleUrls: ['./reactive-form-group-demo.component.scss']
})
export class ReactiveFormGroupDemoComponent implements OnInit {

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl(''),
  //   })
  // })

  // profileForm refactored with FormBuilder
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([
      this.fb.control(''),
      this.fb.control('')
    ])
  })

  constructor( private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address:{
        street:'123 Drew Street'
      }
    })
  }

}
