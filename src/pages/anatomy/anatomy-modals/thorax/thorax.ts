import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy-thorax',
  templateUrl: 'thorax.html'
})
export class ThoraxModal {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
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

}