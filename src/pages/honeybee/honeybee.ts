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

  enlargePhotograph(id) {

    if (document.getElementById(id).className == ''  ) {
        document.getElementById(id).className ='enlargedPhotograph';
        document.getElementById("enlargedImageBackground").className ='enlarged';
    }

    else {
        document.getElementById(id).className ='';
        document.getElementById("enlargedImageBackground").className ='';
    }

  }

  goToFastFactsPage() {
    console.log("goToFastFactsPage() function was called.");

    this.navCtrl.setRoot(FastFactsPage);

  }

}
