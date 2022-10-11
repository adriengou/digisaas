import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  private _profile!: Profile;
  private _profileForm!: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder) {
    //passing data test default profile
    this.profile = new Profile(
      'Gouacide',
      'Adrien',
      new Date('1997-01-04'),
      'adrien.gouacide@gmail.com',
      ['skill1', 'skill2', 'skill3'],
      'image.png'
    );

    //creating the form
    this.profileForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      birthDate: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      avatar: ['', Validators.required],
      skills: this.fb.array([this.fb.control('')]),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileForm.getRawValue());
  }








  public get formSkills() {
    return this.profileForm.get('skills') as FormArray;
  }

  public addFormSkill() {
    this.formSkills.push(this.fb.control(''));
  }

  public get profile(): Profile {
    return this._profile;
  }
  public set profile(value: Profile) {
    this._profile = value;
  }

  public get profileForm(): FormGroup {
    return this._profileForm;
  }
  public set profileForm(value: FormGroup) {
    this._profileForm = value;
  }


  /**
   * @param  {number} a
   * @param  {number} b
   * @returns number
   */
  public multiply(a:number, b:number):number{
    return a * b;
  }
}
