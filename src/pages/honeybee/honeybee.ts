import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FastFactsPage } from '../fast-facts/fast-facts';

@Component({
  selector: 'page-honeybee',
  templateUrl: 'honeybee.html'
})
export class HoneybeePage {

  constructor(public navCtrl: NavController) {

  }

  goToFastFactsPage() {
    console.log("goToFastFactsPage() function was called.");

    this.navCtrl.push(FastFactsPage);

  }

}
