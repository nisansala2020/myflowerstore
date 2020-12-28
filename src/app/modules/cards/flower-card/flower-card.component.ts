import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {CardModule} from 'primeng/card';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
  selector: 'flower-card', // selector 
  templateUrl: './flower-card.component.html',
  styleUrls: ['./flower-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlowerCardComponent implements OnInit {

  constructor() { }

  @Input() title:string =''
  selectedFlowers: string[] = [];
  @Output() selectedFlower = new EventEmitter<string>();

  
  ngOnInit() {
  
  }

  selectCheckBox(value,name){
    this.selectedFlower.emit(name);
  }

}
