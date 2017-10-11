import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AnatomyPage } from '../anatomy/anatomy';

import { DataService } from '../../services/data.service';
import { IPage } from '../../services/page';


@Component({
  selector: 'page-fast-facts',
  templateUrl: 'fast-facts.html',
})

export class FastFactsPage {
  title: string = "Fast Facts";
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  cards_data: any[];
  constructor(public navCtrl: NavController, public pageDataService: DataService) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%cfast-facts Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pageDataService.getData().subscribe(data => this.extractData(data));
  }

  extractData(data: any) {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cextractData() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pages = data;
    console.log("data:");
    console.table(this.pages);

    this.selectedPage = this.pages.filter(p => p.page_id == 3);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);

    this.cards_data = this.selectedPage[0].fast_fact_cards;
    console.log("cards_data: ")
    console.table(this.cards_data);
  }

enlargePhotograph(id) {
  console.log("%c-----------------------", "color: green; font-weight: bold");
  console.log("%cenlargePhotograph() function called!", "color: green; font-weight: bold");
  console.log("%c-----------------------", "color: green; font-weight: bold");

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
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cgoToAnatomyPage() function called.","color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.navCtrl.setRoot(AnatomyPage);
  }

  fact_cards = [
    {
      id: 1,
      content: `Honey bees have 6 legs, 2 compound eyes made up of thousands of tiny lenses (one on each side of the head), 3 simple eyes
      on the top of the head, 2 pairs of wings, a nectar pouch, and a stomach. (We will explore the anatomy of
      a honeybee in the next section.)`,
      image_name: 'assets/images/honeybee_fastfacts_1.jpg'
    },

    {
      id: 2,
      content: "The honey bee's wings stroke incredibly fast, about 200 beats per second, thus making their famous, distinctive buzz.",
      image_name: 'assets/images/honeybee_fastfacts_2.jpg'
    },

    {
      id: 3,
      content: 'A honey bee can fly for up to six miles, and as fast as 15 miles per hour.',
      image_name: 'assets/images/honeybee_fastfacts_3.jpg'
    },
    
    {
      id: 4,
      content: 'A honey bee is the only insect that produces food that humans consume.',
      image_name: 'assets/images/honeybee_fastfacts_4.jpg'

    },

    {
      id: 5,
      content: `Honey is the only food that includes all the substances necessary to sustain life, including enzymes, vitamins, minerals,
      and water; and it's the only food that contains "pinocembrin", an antioxidant associated with improved brain
      functioning.`,
      image_name: 'assets/images/honeybee_fastfacts_5.jpg'
    }
  ]
}
