import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  private _profile!: Profile;
  private _imageStyle!: String;

  constructor(private profileService: ProfileService) {
    //set default profile
    this.profile = new Profile(
      'nom',
      'prenom',
      new Date(),
      'email@address.com',
      ['skill1', 'skill2', 'skill3'],
      'https://picsum.photos/200/200'
    );

    //set default image style
    this.setImageStyle(this.profile.avatar);
  }

  ngOnInit(): void {
    this.profileService.subject$.subscribe((value: Profile) => {
      console.log(value);
      //save the profile in profile attribute
      this.profile = value;

      //set imageStyle to url with profile avatar link
      this.setImageStyle(this.profile.avatar);
    });
  }

  public get profile(): Profile {
    return this._profile;
  }

  public set profile(value: Profile) {
    this._profile = value;
  }

  public get imageStyle(): String {
    return this._imageStyle;
  }
  public set imageStyle(value: String) {
    this._imageStyle = value;
  }

  private setImageStyle(url: string) {
    this.imageStyle = `url('${url}')`;
  }
}
