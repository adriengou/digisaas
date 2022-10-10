import { Component, OnInit } from '@angular/core';
import { RandomUsersApiService } from '../../services/random-users-api.service';

@Component({
  selector: 'app-http-card',
  templateUrl: './http-card.component.html',
  styleUrls: ['./http-card.component.scss'],
})
export class HttpCardComponent implements OnInit {
  users!: any[];
  constructor(private usersService: RandomUsersApiService) {}

  ngOnInit(): void {
    this.usersService.getRandomUsers(1).subscribe((data: any) => {
      console.log(data);
      this.users = data.data;
    });
  }
}
