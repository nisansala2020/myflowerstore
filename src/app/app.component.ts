import { Component, ViewEncapsulation } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent {
  title = 'my-flower-store';
  searchText:string='';

  constructor(private dataService:DataService){

  }

  updateSearchText(){
    this.dataService.setSearchText(this.searchText);
  }
}
