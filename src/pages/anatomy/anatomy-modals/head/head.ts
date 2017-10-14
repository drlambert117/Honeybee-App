import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
  
    intro: string = "A Honeybee's head can be further broken down into 5 main components:<b> the Antennae, Eyes (Compound and Simple), Proboscis, Mandibles, and the Inner Head.</b>";
  
    sections = [
  
      {
        id: 1,
        title:"<b> <u> The Antennae </u> </b>",
        image:"",
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est tristique mollis. Nam elit
        purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare. Curabitur semper sit amet
        tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt massa. Nullam pharetra
        dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque ante mauris, sit
        amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia. Nam fermentum malesuada
        nisi, ut commodo purus aliquam eget.`,
      },
  
      {
        id: 2,
        title:"<b> <u> The Eyes </u> </b>",
        image:"",
        description:`<b>Compound Eyes</b> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est
        tristique mollis. Nam elit purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare.
        Curabitur semper sit amet tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt
        massa. Nullam pharetra dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque
        ante mauris, sit amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia.
        Nam fermentum malesuada nisi, ut commodo purus aliquam eget. <br /> <br />

        <b>Simple Eyes</b> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est
        tristique mollis. Nam elit purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare.
        Curabitur semper sit amet tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt
        massa. Nullam pharetra dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque
        ante mauris, sit amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia.
        Nam fermentum malesuada nisi, ut commodo purus aliquam eget.`,
      },
  
      {
        id: 3,
        title:"<b> <u> The Proboscis </u> </b>",
        image:"",
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est tristique mollis. Nam elit
        purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare. Curabitur semper sit amet
        tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt massa. Nullam pharetra
        dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque ante mauris, sit
        amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia. Nam fermentum malesuada
        nisi, ut commodo purus aliquam eget.​`,
      },

      {
        id: 4,
        title:"<b> <u> The Mandibles </u> </b>",
        image:"",
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est tristique mollis. Nam elit
        purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare. Curabitur semper sit amet
        tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt massa. Nullam pharetra
        dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque ante mauris, sit
        amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia. Nam fermentum malesuada
        nisi, ut commodo purus aliquam eget.​`,
      },

      {
        id: 5,
        title:"<b> <u> The Inner Head </u> </b>",
        image:"",
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est tristique mollis. Nam elit
        purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare. Curabitur semper sit amet
        tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt massa. Nullam pharetra
        dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque ante mauris, sit
        amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia. Nam fermentum malesuada
        nisi, ut commodo purus aliquam eget.​`,
      },
      
    ];  

}