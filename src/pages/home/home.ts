import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HoneybeePage } from '../honeybee/honeybee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToHoneybeePage() {
    console.log("goToHoneybeePage() function was called.");

    this.navCtrl.setRoot(HoneybeePage);

  }

}
