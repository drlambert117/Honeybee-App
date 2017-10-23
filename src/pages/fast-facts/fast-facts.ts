import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { AnatomyPage } from '../anatomy/anatomy';

import { DataService } from '../../services/data.service';
import { IPage } from '../../services/page';


@Component({
  selector: 'page-fast-facts',
  templateUrl: 'fast-facts.html',
})

export class FastFactsPage {
  title: string = "Fast Facts";
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  cards_data: any[];
  constructor(public navCtrl: NavController, public pageDataService: DataService, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%cfast-facts Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loader.present();

    this.pageDataService.getData().subscribe(data => this.extractData(data));
  }

  extractData(data: any) {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cextractData() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pages = data;
    console.log("data:");
    console.table(this.pages);

    this.selectedPage = this.pages.filter(p => p.page_id == 3);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);

    this.cards_data = this.selectedPage[0].fast_fact_cards;
    console.log("cards_data: ")
    console.table(this.cards_data);
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

  goToAnatomyPage() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToAnatomyPage() function called.", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.navCtrl.setRoot(AnatomyPage);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}
