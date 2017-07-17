import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AnatomyPage } from '../anatomy/anatomy';

@Component({
  selector: 'page-fast-facts',
  templateUrl: 'fast-facts.html'
})
export class FastFactsPage {

  constructor(public navCtrl: NavController) {

  }

  goToAnatomyPage() {
    console.log("goToAnatomyPage() function called.");

    this.navCtrl.push(AnatomyPage);

  }

}
