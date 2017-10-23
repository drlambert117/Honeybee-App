import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { HoneybeePage } from '../honeybee/honeybee';

//Services
import { DataService } from '../../services';
import { IPage } from '../../services/page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataService]
})

export class HomePage {
  title: string = "The Helpful Honeybee";
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];

  constructor(public navCtrl: NavController, public pageDataService: DataService) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%cHome Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pageDataService.getData().subscribe(data => this.extractData(data));
  }

  extractData(data: any) {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cextractData() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pages = data;
    console.log("data:");
    console.table(this.pages);

    this.selectedPage = this.pages.filter(p => p.page_id == 1);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);
  }

  goToHoneybeePage() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToHoneybeePage() function was called.", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.navCtrl.setRoot(HoneybeePage);
  }
}
