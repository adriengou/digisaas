import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _profile!: Profile;
  private _subject$!: Subject<Profile>;

  constructor() {
    this.subject$ = new Subject<Profile>();
  }

  public changeProfile(value: Profile) {
    this.profile = value;
    this.subject$.next(this.profile);
  }

  public get profile(): Profile {
    return this._profile;
  }
  public set profile(value: Profile) {
    this._profile = value;
  }

  public get subject$(): Subject<Profile> {
    return this._subject$;
  }
  public set subject$(value: Subject<Profile>) {
    this._subject$ = value;
  }
}
