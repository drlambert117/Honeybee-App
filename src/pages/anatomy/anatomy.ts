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
  title: string = "Anatomy";

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

  openHeadModal() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log('%copenHeadModal() function has been called.', "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    let headModal = this.modalCtrl.create(HeadModal);
    headModal.present();
  }

  openThoraxModal() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log('%copenThoraxModal() function has been called.');
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    let thoraxModal = this.modalCtrl.create(ThoraxModal);
    thoraxModal.present();
  }

  openAbdomenModal() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log('%copenAbdomenModal() function has been called.');
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    let abdomenModal = this.modalCtrl.create(AbdomenModal);
    abdomenModal.present();
  }

  goToGenderPage() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToGenderPage() function called.", "color:green; font-weight:bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    this.navCtrl.setRoot(HiveHierarchyPage);
  }

  image_name: string = "assets/images/honeybee_basic_anatomy.jpg";

  page_content: string = `The honeybee, though small in size, is an extremely complex creature. Like most insects, the honeybee's body is divided
  into three parts: the head, thorax, and abdomen. Tap each anatomical part to learn more.`;

}
