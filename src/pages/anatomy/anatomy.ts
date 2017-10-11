import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { HiveHierarchyPage } from '../hive-hierarchy/hive-hierarchy';

import { HeadModal } from './anatomy-modals/head/head';
import { ThoraxModal } from './anatomy-modals/thorax/thorax'
import { AbdomenModal } from './anatomy-modals/abdomen/abdomen';

import { DataService } from '../../services/data.service';
import { IPage } from '../../services/page';

@Component({
  selector: 'page-basic-anatomy',
  templateUrl: 'anatomy.html',
})

export class AnatomyPage {
  title: string = "Anatomy";
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  abdomen_Data: any[];
  abdomen_Sections: any[];
  head_Data: any[];
  thorax_Data: any[];
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public pageDataService: DataService) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%canatomy Component", "color: blue; font-weight: bold");
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

    this.selectedPage = this.pages.filter(p => p.page_id == 4);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);

    this.abdomen_Data = this.selectedPage[0].anatomy_modals[0];
    console.log("abdomen_Data: ");
    console.table(this.abdomen_Data);

    this.head_Data = this.selectedPage[0].anatomy_modals[1];
    console.log("head_Data: ");
    console.table(this.head_Data);

    this.thorax_Data = this.selectedPage[0].anatomy_modals[2];
    console.log("thorax_Data: ");
    console.table(this.thorax_Data);
  }

  openHeadModal() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%copenHeadModal() function has been called.", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    let headModal = this.modalCtrl.create(HeadModal);
    headModal.present();
  }

  openThoraxModal() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%copenThoraxModal() function has been called.", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    let thoraxModal = this.modalCtrl.create(ThoraxModal);
    thoraxModal.present();
  }

  openAbdomenModal() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%copenAbdomenModal() function has been called.", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    let abdomenModal = this.modalCtrl.create(AbdomenModal);
    abdomenModal.present();
  }

  goToGenderPage() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToGenderPage() function called.", "color:green; font-weight:bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    this.navCtrl.setRoot(HiveHierarchyPage);
  }

}
