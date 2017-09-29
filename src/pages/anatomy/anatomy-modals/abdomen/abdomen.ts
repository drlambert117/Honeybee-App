import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy-abdomen',
  templateUrl: 'abdomen.html'
})

export class AbdomenModal {
  title : string = 'Anatomy of the Abdomen';

  constructor(public viewCtrl: ViewController) {

  }

  ngOnInit() {
    console.log("%c-----------------------", "color: blue; font-weight: bold");
    console.log("%canatomy: abdomen modal Component", "color: blue; font-weight: bold");
    console.log("%c-----------------------", "color: blue; font-weight: bold");

    console.log("%c-----------------------", "color: green; font-weight: bold");
    console.log("%cngOnInit() function called!", "color: green; font-weight: bold");
    console.log("%c-----------------------", "color: green; font-weight: bold");
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
  
    intro : string = "A Honeybee's abdomen can be further broken down into 3 main components:<b> the Reproductive Organs, the Wax Glands, and the Stinger.</b>";
  
    sections = [
  
      {
        id: 1,
        title:"<b> <u> The Reproductive Organs </u> </b>",
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
        title:"<b> <u> The Wax Glands </u> </b>",
        image:"",
        description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla diam non est tristique mollis. Nam elit
        purus, vestibulum vel varius eu, eleifend vel nulla. Vivamus malesuada dapibus ornare. Curabitur semper sit amet
        tortor a dictum. Suspendisse euismod sollicitudin nulla a eleifend. Maecenas ut tincidunt massa. Nullam pharetra
        dolor sed laoreet tincidunt. Nunc ornare felis a quam sodales porttitor. Suspendisse scelerisque ante mauris, sit
        amet fermentum nunc laoreet eu. Nunc quis lacus ligula. Donec tempus lorem ac faucibus lacinia. Nam fermentum malesuada
        nisi, ut commodo purus aliquam eget.`,
      },
  
      {
        id: 3,
        title:"<b> <u> The Stinger </u> </b>",
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