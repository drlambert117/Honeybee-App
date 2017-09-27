import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataService} from '../../services';

import { HoneybeePage } from '../honeybee/honeybee';
import {IPage} from '../../services/page';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[DataService]
  
})
export class HomePage {

  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];

  constructor(public navCtrl: NavController, public pageDataService : DataService) {

  }

  ngOnInit(){
    console.log("ngOnInit function called!");
    console.log("%c-----------------------","color: blue; font-weight: bold");
    console.log("%cHome Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------","color: blue; font-weight: bold");

    console.log("ngOnInit function called!");
    
    this.pageDataService.getData().subscribe(data => this.extractData(data));      
            

                }

   extractData(data: any){
    console.log("%c-----------------------","color: blue; font-weight: bold");
    console.log("%cHome Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------","color: blue; font-weight: bold");
    console.log("extractData function called!");

    this.pages = data;
    console.log("data:");
    console.table(this.pages); 

    this.selectedPage = this.pages.filter(p => p.page_id == 1);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);
}

  goToHoneybeePage() {
    console.log("goToHoneybeePage() function was called.");

    this.navCtrl.setRoot(HoneybeePage);

  }

  page_id: 1;

  title: string = "The Helpful Honeybee";




}
