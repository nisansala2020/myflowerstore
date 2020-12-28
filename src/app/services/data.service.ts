import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private searchText: BehaviorSubject<string>;

  constructor() {
    this.searchText = new BehaviorSubject<string>('');
   }

   public getSearchText() {
    return this.searchText.asObservable();
  }

  public setSearchText(searchText) {
    this.searchText.next(searchText);
  }
}
