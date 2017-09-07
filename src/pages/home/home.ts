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

  title: string = "The Helpful Honeybee";

  image_name: string = "assets/images/honeybee_1.png";
  
  page_content: string = `The purpose of this app is to educate about the wonders of the Honeybee and it's vital role in the natural world. Feel free
  to follow the app in order or select a specific section from the menu to the left.`;



}
