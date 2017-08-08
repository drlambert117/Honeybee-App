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

  goToAnatomyPage() {
    console.log("goToAnatomyPage() function called.");

    this.navCtrl.setRoot(AnatomyPage);

  }


}
