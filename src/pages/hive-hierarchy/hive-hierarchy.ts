import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QueenAboutPage } from './queen-bee/about/about';

/**
 * Generated class for the GenderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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


  title: string = 'Hierarchy of the Beehive';

  card_title: string = 'Every Honeybee has its place.';

  description: string = `The beehive is an extremely complex ecosystem where every individual bee has it's own function.
  The three types of Honeybee are often called castes, with these castes being comprised of Queen Bees, Worker Bees, and Drone Bees.
  swipe to the left to learn more about each individual caste.`;

  slides = [
    {
      title: "<b>The Female Queen Bee</b>",
      description: "Royalty, with an undying sting.",
      image: "assets/images/honeybee_1.png",
    },
    {
      title: "<b>The Female Worker Bee</b>",
      description: "Fierce protectors, gathering nectar.",
      image: "assets/images/honeybee_1.png",
    },
    {
      title: "<b>The Male Drone Bee</b>",
      description: "Short lived, and uninterested,",
      image: "assets/images/honeybee_1.png",
    }
  ];

}
