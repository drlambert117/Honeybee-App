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

  title: string = 'What is a Honeybee?';

  image_name: string = "assets/images/honeybee_2.jpg";

  page_content: string = `A honey bee (or honeybee) is any member of the genus Apis, primarily distinguished by the production and storage of honey
  and the construction of perennial, colonial nests from wax. Currently, only seven species of honey bee are recognized,
  with a total of 44 subspecies, though historically six to eleven species are recognized. The best known honey bee
  is the Western honey bee which has been domesticated for honey production and crop pollination. Honey bees represent
  only a small fraction of the roughly 20,000 known species of bees. Some other types of related bees produce and store
  honey, including the stingless honey bees, but only members of the genus Apis are true honey bees. Feel free to go
  through this app to learn more about the marvelous honeybee.`;

}
