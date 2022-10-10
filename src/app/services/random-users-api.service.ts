import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomUsersApiService {
  apiUrl = 'http://reqres.in/api';

  constructor(private http: HttpClient) {}

  getRandomUsers(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users?page=${page}`);
  }
}
