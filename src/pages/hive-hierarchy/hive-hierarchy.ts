import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QueenAboutPage } from './queen-bee/about/about';
import { DroneAboutPage } from './drone-bee/about/about';
import { WorkerAboutPage } from './worker-bee/about/about';

@Component({
  selector: 'page-hive-hierarchy',
  templateUrl: 'hive-hierarchy.html',
})
export class HiveHierarchyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenderPage');
  }

  goToPageAppearance() {
    this.navCtrl.push(QueenAboutPage);
    console.log("goToPage() function called.");
  }

  goToPage(page) {
    this.navCtrl.push(page);
    console.log("goToPage() function called.");
  }

  title: string = 'Hierarchy of the Beehive';

  intro_title: string = 'Every Honeybee has its place.';

  intro_image: string = 'assets/images/honeybee_1.png';

  intro_description: string = `The beehive is an extremely complex ecosystem where every individual bee has it's own function.
  The three types of Honeybee are often called castes, with these castes being comprised of Queen Bees, Worker Bees, and Drone Bees.
  Swipe to the left to learn more about each individual caste.`;

  slides = [
    {
      title: "<b>The Female Queen Bee</b>",
      description: "Royalty, with an undying sting.",
      image: "assets/images/honeybee_1.png",
      page: QueenAboutPage
    },
    
    {
      title: "<b>The Female Worker Bee</b>",
      description: "Fierce protectors, gathering nectar.",
      image: "assets/images/honeybee_1.png",
      page: WorkerAboutPage
    },

    {
      title: "<b>The Male Drone Bee</b>",
      description: "Short lived, and uninterested,",
      image: "assets/images/honeybee_1.png",
      page: DroneAboutPage
    }
  ];

}
