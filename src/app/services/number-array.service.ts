import { Injectable } from '@angular/core';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberArrayService {
  private _behavior =  new BehaviorSubject<number[]>([0,0])
  private _numbers$ = this._behavior.asObservable();

  constructor() {}


  public get numbers$(): Observable<any> {
    return this._numbers$;
  }

  public set numbers$(numbers$: Observable<any>) {
      this._numbers$ = numbers$;
  }

  changeNumbers(numbers:number[]){
    this._behavior.next(numbers);
  }
}
