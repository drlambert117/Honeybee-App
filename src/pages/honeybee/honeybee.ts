import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { ImageEnlargeService } from '../../app/imageEnlargeService';

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

    this.navCtrl.setRoot(FastFactsPage);

  }

  enlargePhotograph(id) {
    console.log("enlargePhotograph function called!");
    if (document.getElementById(id).className == ''  ) {
        document.getElementById(id).className ='enlargedPhotograph';
        document.getElementById("enlargedImageBackground").className ='enlarged';
    }

    else {
        document.getElementById(id).className ='';
        document.getElementById("enlargedImageBackground").className ='';
    }

  }

}
