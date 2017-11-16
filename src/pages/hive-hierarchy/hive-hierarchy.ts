import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { QueenAboutPage } from './queen-bee/about/about';
import { DroneAboutPage } from './drone-bee/about/about';
import { WorkerAboutPage } from './worker-bee/about/about';

//Services
import { DataService } from '../../services/data.service';
import { IPage } from '../../services/page';

@Component({
  selector: 'page-hive-hierarchy',
  templateUrl: 'hive-hierarchy.html',
})
export class HiveHierarchyPage {
  title: string = 'Hierarchy of the Beehive';
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  queenSlide_Data: any[];
  workerSlide_Data: any[];
  droneSlide_Data: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public pageDataService: DataService, public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%canatomy Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loader.present();

    this.pageDataService.getData().subscribe(data => this.extractData(data));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenderPage');
  }

  extractData(data: any) {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cextractData() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    this.pages = data;
    console.log("data:");
    console.table(this.pages);

    this.selectedPage = this.pages.filter(p => p.page_id == 5);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);

    this.queenSlide_Data = this.selectedPage[0].page_slides.filter(p => p.slide_id == 1);
    console.log("queenSlide_Data: ");
    console.table(this.queenSlide_Data);

    this.workerSlide_Data = this.selectedPage[0].page_slides.filter(p => p.slide_id == 2);
    console.log("queenSlide_Data: ");
    console.table(this.queenSlide_Data);
    
    this.droneSlide_Data = this.selectedPage[0].page_slides.filter(p => p.slide_id == 3);
    console.log("droneSlide_Data: ");
    console.table(this.droneSlide_Data);

  }

  openQueenAboutPage() {
    this.navCtrl.push(QueenAboutPage);
    console.log("openQueenAboutPage() called.");
  }

  openWorkerAboutPage() {
    this.navCtrl.push(WorkerAboutPage);
    console.log("openWorkerAboutPage() called.");
  }

  openDroneAboutPage() {
    this.navCtrl.push(DroneAboutPage);
    console.log("openDroneAboutPage() called.");
  }

  intro_title: string = 'Every Honeybee has its place.';

  intro_image: string = 'assets/images/honeybee_1.png';

  intro_description: string = `The beehive is an extremely complex ecosystem where every individual bee has it's own function.
  The three types of Honeybee are often called castes, with these castes being comprised of Queen Bees, Worker Bees, and Drone Bees.
  Swipe to the left to learn more about each individual caste.`;

  slides = [
    {
      title: "<b>The Female Queen Bee</b>",
      description: "Royalty, with an undying sting.",
      image: "assets/images/honeybee_1.png",
      page: QueenAboutPage
    },
    
    {
      title: "<b>The Female Worker Bee</b>",
      description: "Fierce protectors, gathering nectar.",
      image: "assets/images/honeybee_1.png",
      page: WorkerAboutPage
    },

    {
      title: "<b>The Male Drone Bee</b>",
      description: "Short lived, and uninterested,",
      image: "assets/images/honeybee_1.png",
      page: DroneAboutPage
    }
  ];

}
