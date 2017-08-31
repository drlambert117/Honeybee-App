import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy-abdomen',
  templateUrl: 'abdomen.html'
})
export class AbdomenModal {

  constructor(public viewCtrl: ViewController) {

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

  title = 'Anatomy of the Abdomen';
  
    intro = "A Honeybee's abdomen can be further broken down into 3 main components:<b> the Reproductive Organs, the Wax Glands, and the Stinger.</b>";
  
    sections = [
  
      {
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