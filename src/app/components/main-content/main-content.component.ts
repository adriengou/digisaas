import {
  Component,
  OnInit,
  NgModule,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { RandomUsersApiService } from '../../services/random-users-api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  private _cardsData!: any[];
  private _view!: 'cards' | 'profile';

  constructor(private usersService: RandomUsersApiService) {
    //default view shown
    this.showProfile();
  }

  ngOnInit(): void {
    this.usersService.getRandomUsers(1).subscribe((data: any) => {
      console.log(data);
      this.cardsData = data.data;
    });
  }

  public get cardsData(): any[] {
    return this._cardsData;
  }
  public set cardsData(value: any[]) {
    this._cardsData = value;
  }

  public get view(): 'cards' | 'profile' {
    return this._view;
  }
  public set view(value: 'cards' | 'profile') {
    this._view = value;
  }

  public showCards() {
    this.view = 'cards';
  }

  public showProfile() {
    this.view = 'profile';
  }
}

//directive pour supprimer un élément
// class jobs.ts dans models
// exporter une classe avec ses attributs
