import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy-head',
  templateUrl: 'head.html'
})
export class HeadModal {

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

  title: string = 'Anatomy of the Head';
  
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