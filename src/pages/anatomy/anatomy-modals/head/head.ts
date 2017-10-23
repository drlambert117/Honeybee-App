import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

//Services
import { DataService } from '../../../../services/data.service';
import { IPage } from '../../../../services/page';

@Component({
  selector: 'page-basic-anatomy-head',
  templateUrl: 'head.html'
})

export class HeadModal {
  title: string = 'Anatomy of the Head';
  pages: IPage[];
  page_data: IPage[];
  selectedPage: IPage[];
  modal_Data: any[];
  modal_Intro: string;
  modal_Sections: any[];

  constructor(public viewCtrl: ViewController, public pageDataService: DataService) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%canatomy: head modal Component", "color: blue; font-weight: bold");
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

    this.selectedPage = this.pages.filter(p => p.page_id == 4);
    console.log("selectedPage data: ");
    console.table(this.selectedPage);

    this.modal_Data = this.selectedPage[0].anatomy_modals[0];
    console.log("modal_Data: ");
    console.table(this.modal_Data);

    this.modal_Intro = this.selectedPage[0].anatomy_modals[0].modal_intro;
    console.log(this.modal_Intro);

    this.modal_Sections = this.selectedPage[0].anatomy_modals[0].modal_sections;
    console.log("modal_Sections: ");
    console.table(this.modal_Sections);
  }

  enlargePhotograph(id) {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cenlargePhotograph() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");

    if (document.getElementById(id).className == '') {
      document.getElementById(id).className = 'enlargedPhotograph';
      document.getElementById("enlargedImageBackground").className = 'enlarged';
    }

    else {
      document.getElementById(id).className = '';
      document.getElementById("enlargedImageBackground").className = '';
    }

  }

  dismiss() {
    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cdismiss() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
    this.viewCtrl.dismiss();
  }
}