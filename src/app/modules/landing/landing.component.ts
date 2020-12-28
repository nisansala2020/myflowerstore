import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { flower } from '../../domain/flower';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
 
})
export class LandingComponent implements OnInit {

  myFlowerList:flower[]=[];
  selectedFlowers: string[] =[];

  checkedList:string[]=[];
  searchText:string='';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.mySellingFlowers();
    this.dataService.getSearchText().subscribe(response => {
      this.printSearchtext(response);
    })
  }

  printSearchtext(searchText){
    this.searchText = searchText;
  }

  printOrder(flowerName){
    if(this.selectedFlowers.indexOf(flowerName)<0){
      this.selectedFlowers.push(flowerName)
    }
    else{
      let index = this.selectedFlowers.indexOf(flowerName);
      this.selectedFlowers.splice(index,1);
    }

  }

  mySellingFlowers(){
    let rose = new flower();
    rose.name = "Rose";
    rose.price = 100;
    rose.availableQuantity = 1000;
    rose.isChecked = false;
    this. myFlowerList.push(rose);

    let lily = new flower();
    lily.name = "Lilly";
    lily.price = 80;
    lily.availableQuantity = 2000;
    lily.isChecked = false;
    this. myFlowerList.push(lily);

    let tulip = new flower();
    tulip.name = "Tulip";
    tulip.price = 100;
    tulip.availableQuantity = 2300;
    lily.isChecked = false;

    this. myFlowerList.push(tulip);

    let carnation = new flower();
    carnation.name = "Carnation";
    carnation.price = 50;
    carnation.availableQuantity = 1500;
    lily.isChecked = false;

    this. myFlowerList.push(carnation);

    let gerbera = new flower();
    gerbera.name = "Gerbera";
    gerbera.price = 50;
    gerbera.availableQuantity = 1500;
    lily.isChecked = false;

    this. myFlowerList.push(gerbera);

    let orchid = new flower();
    orchid.name = "Orchid";
    orchid.price = 50;
    orchid.availableQuantity = 1500;
    lily.isChecked = false;

    this. myFlowerList.push(orchid);

  }

  trackFlowers(index,flower){
    return flower?flower.name:undefined
  }

  

}
