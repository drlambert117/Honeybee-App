import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Pages
import { FastFactsPage } from '../fast-facts/fast-facts';

//Services
import { DataService } from '../../services';
import { IPage } from '../../services/page';

@Component({
  selector: 'page-honeybee',
  templateUrl: 'honeybee.html',
  providers: [DataService]
})

export class HoneybeePage {
  title: string = 'What is a Honeybee?';
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];

  constructor(public navCtrl: NavController, public pageDataService: DataService) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%cHoneyBee Component", "color: blue; font-weight: bold");
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

    this.selectedPage = this.pages.filter(p => p.page_id == 2);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);
  }

  enlargePhotograph(id) {

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cenlargePhotograph() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    if (document.getElementById(id).className == '') {
      document.getElementById(id).className = 'enlargedPhotograph';
      document.getElementById("enlargedImageBackground").className = 'enlarged';
    }

    else {
      document.getElementById(id).className = '';
      document.getElementById("enlargedImageBackground").className = '';
    }
  }

  goToFastFactsPage() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToFastFactsPage() function was called.", "color: green; font-weight:bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.navCtrl.setRoot(FastFactsPage);
  }
}
