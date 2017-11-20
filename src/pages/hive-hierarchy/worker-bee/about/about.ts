import { Component } from '@angular/core';
import { ViewController, LoadingController } from 'ionic-angular';

import { DataService } from '../../../../services/data.service';
import { IPage } from '../../../../services/page';

@Component({
  selector: 'page-worker-about',
  templateUrl: 'about.html'
})
export class WorkerAboutPage {
  title : string = 'The Worker Bee';
  segment : string = "Appearance";
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  appearance_Content: any[];
  anatomy_Content: any[];
  life_Cycle_Content: any[];
  function_Content: any[];

  constructor( public viewCtrl: ViewController, public pageDataService: DataService, public loadingCtrl: LoadingController ) {

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

    this.page_data = this.selectedPage[0].pages_info.filter(p => p.page_id == 3);
    console.log("page_data: ");
    console.table(this.page_data);

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  enlargePhotograph(id) {

    if (document.getElementById(id).className == '') {
      document.getElementById(id).className = 'enlargedPhotograph';
      document.getElementById("enlargedImageBackground").className = 'enlarged';
    }

    else {
      document.getElementById(id).className = '';
      document.getElementById("enlargedImageBackground").className = '';
    }

  }
  
    appearance_content : string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel molestie ligula. Phasellus euismod arcu dolor, ac commodo sapien euismod eget. 
    Suspendisse commodo nisi dui, eget luctus mi convallis non. Donec eget dapibus ex. Praesent sed consectetur leo.
    Sed at urna orci. Curabitur vitae elit urna. Sed hendrerit lectus dolor, ac bibendum diam accumsan vitae. 
    Donec vitae sem id lorem congue lobortis vel a risus. Nunc velit dui, mollis ac purus ac, molestie ornare odio. 
    Phasellus vulputate luctus nisi, ac euismod arcu elementum ut. Aliquam a nisl magna. Nulla venenatis volutpat arcu, in posuere lectus finibus vitae. 
    Cras neque justo, tincidunt in sollicitudin sit amet, gravida ac sem. Duis auctor neque at est ornare pretium. Integer ullamcorper pellentesque neque ac congue.
    Morbi fringilla ac turpis vitae aliquet. Proin hendrerit malesuada pellentesque. Quisque ac ullamcorper ligula, et tristique enim. Etiam ut efficitur justo, vitae pulvinar nulla.
    Proin ullamcorper egestas neque in pharetra. Aenean eu sollicitudin arcu, in varius elit. Etiam pretium mollis vehicula. Fusce porttitor at risus ut congue. Integer porta ornare elit quis pharetra.`;

    anatomy_content : string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel molestie ligula. Phasellus euismod arcu dolor, ac commodo sapien euismod eget. 
    Suspendisse commodo nisi dui, eget luctus mi convallis non. Donec eget dapibus ex. Praesent sed consectetur leo.
    Sed at urna orci. Curabitur vitae elit urna. Sed hendrerit lectus dolor, ac bibendum diam accumsan vitae. 
    Donec vitae sem id lorem congue lobortis vel a risus. Nunc velit dui, mollis ac purus ac, molestie ornare odio. 
    Phasellus vulputate luctus nisi, ac euismod arcu elementum ut. Aliquam a nisl magna. Nulla venenatis volutpat arcu, in posuere lectus finibus vitae. 
    Cras neque justo, tincidunt in sollicitudin sit amet, gravida ac sem. Duis auctor neque at est ornare pretium. Integer ullamcorper pellentesque neque ac congue.
    Morbi fringilla ac turpis vitae aliquet. Proin hendrerit malesuada pellentesque. Quisque ac ullamcorper ligula, et tristique enim. Etiam ut efficitur justo, vitae pulvinar nulla.
    Proin ullamcorper egestas neque in pharetra. Aenean eu sollicitudin arcu, in varius elit. Etiam pretium mollis vehicula. Fusce porttitor at risus ut congue. Integer porta ornare elit quis pharetra.`;

    life_cycle_content : string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel molestie ligula. Phasellus euismod arcu dolor, ac commodo sapien euismod eget. 
    Suspendisse commodo nisi dui, eget luctus mi convallis non. Donec eget dapibus ex. Praesent sed consectetur leo.
    Sed at urna orci. Curabitur vitae elit urna. Sed hendrerit lectus dolor, ac bibendum diam accumsan vitae. 
    Donec vitae sem id lorem congue lobortis vel a risus. Nunc velit dui, mollis ac purus ac, molestie ornare odio. 
    Phasellus vulputate luctus nisi, ac euismod arcu elementum ut. Aliquam a nisl magna. Nulla venenatis volutpat arcu, in posuere lectus finibus vitae. 
    Cras neque justo, tincidunt in sollicitudin sit amet, gravida ac sem. Duis auctor neque at est ornare pretium. Integer ullamcorper pellentesque neque ac congue.
    Morbi fringilla ac turpis vitae aliquet. Proin hendrerit malesuada pellentesque. Quisque ac ullamcorper ligula, et tristique enim. Etiam ut efficitur justo, vitae pulvinar nulla.
    Proin ullamcorper egestas neque in pharetra. Aenean eu sollicitudin arcu, in varius elit. Etiam pretium mollis vehicula. Fusce porttitor at risus ut congue. Integer porta ornare elit quis pharetra.`;

    function_content : string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel molestie ligula. Phasellus euismod arcu dolor, ac commodo sapien euismod eget. 
    Suspendisse commodo nisi dui, eget luctus mi convallis non. Donec eget dapibus ex. Praesent sed consectetur leo.
    Sed at urna orci. Curabitur vitae elit urna. Sed hendrerit lectus dolor, ac bibendum diam accumsan vitae. 
    Donec vitae sem id lorem congue lobortis vel a risus. Nunc velit dui, mollis ac purus ac, molestie ornare odio. 
    Phasellus vulputate luctus nisi, ac euismod arcu elementum ut. Aliquam a nisl magna. Nulla venenatis volutpat arcu, in posuere lectus finibus vitae. 
    Cras neque justo, tincidunt in sollicitudin sit amet, gravida ac sem. Duis auctor neque at est ornare pretium. Integer ullamcorper pellentesque neque ac congue.
    Morbi fringilla ac turpis vitae aliquet. Proin hendrerit malesuada pellentesque. Quisque ac ullamcorper ligula, et tristique enim. Etiam ut efficitur justo, vitae pulvinar nulla.
    Proin ullamcorper egestas neque in pharetra. Aenean eu sollicitudin arcu, in varius elit. Etiam pretium mollis vehicula. Fusce porttitor at risus ut congue. Integer porta ornare elit quis pharetra.`;

  
}