import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HiveHierarchyPage } from '../hive-hierarchy/hive-hierarchy';

import { HeadModal } from './anatomy-modals/head/head';
import { ThoraxModal } from './anatomy-modals/thorax/thorax'
import { AbdomenModal } from './anatomy-modals/abdomen/abdomen';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy',
  templateUrl: 'anatomy.html'
})

export class AnatomyPage {
  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%canatomy Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
  }

  goToGenderPage() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%cgoToGenderPage() function called.", "color:green; font-weight:bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    this.navCtrl.setRoot(HiveHierarchyPage);
  }

  openHeadModal() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log('%copenHeadModal() function has been called.');
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    let headModal = this.modalCtrl.create(HeadModal);
    headModal.present();
  }

  openThoraxModal() {
    let thoraxModal = this.modalCtrl.create(ThoraxModal);
    thoraxModal.present();
    console.log('openThoraxModal() function has been called.');
  }

  openAbdomenModal() {
    let abdomenModal = this.modalCtrl.create(AbdomenModal);
    abdomenModal.present();
    console.log('openAbdomenModal() function has been called.');
  }

  title: string = "Anatomy";

  image_name: string = "assets/images/honeybee_basic_anatomy.jpg";

  page_content: string = `The honeybee, though small in size, is an extremely complex creature. Like most insects, the honeybee's body is divided
  into three parts: the head, thorax, and abdomen. Tap each anatomical part to learn more.`;

}
