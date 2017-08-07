import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { HeadModal } from './anatomy-modals/head/head';
import { ThoraxModal } from './anatomy-modals/thorax/thorax'
import { AbdomenModal } from './anatomy-modals/abdomen/abdomen';

// import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-basic-anatomy',
  templateUrl: 'anatomy.html'
})
export class AnatomyPage {

  constructor(public modalCtrl: ModalController) {

  }

  openHeadModal() {
    let headModal = this.modalCtrl.create(HeadModal);
    headModal.present();
    console.log('openHeadModal() function has been called.');
  }

  openThoraxModal() {
    let thoraxModal = this.modalCtrl.create(ThoraxModal);
    thoraxModal.present();
    console.log('openThoraxModal() function has been called.');
  }

  openAbdomenModal() {
    let abdomenModal = this.modalCtrl.create(AbdomenModal);
    abdomenModal.present();
    console.log('openAbdomenModal() function has been called.');
  }

}
