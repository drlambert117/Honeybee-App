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

    if (document.getElementById(id).className == '') {
      document.getElementById(id).className = 'enlargedPhotograph';
      document.getElementById("enlargedImageBackground").className = 'enlarged';
    }

    else {
      document.getElementById(id).className = '';
      document.getElementById("enlargedImageBackground").className = '';
    }

  }

  title = 'Anatomy of the Thorax';

  intro = "A Honeybee's thorax can be further broken down into 3 main components:<b> the Wings, Legs, and Pollen Baskets. </b>";

  sections = [

    {
      title:"<b> <u> The Wings </u> </b>",
      image:"assets/images/honeybee_wings.jpg",
      description:`The wings of the Honeybee are arranged in two pairs on the thorax are connected by a row of hooks on the back wing. The
      fore wings are substantially bigger than the hind wings but they both aid in flight. <br /> <br /> The bee is able
      to lift off by giving a propeller like twist to each wing during the up and down strokes. Pulsating muscles located
      in the thorax allow the bee to travel at 15 miles per hour and maintain a range up to three miles from the hive,
      expanding their area of pollination.`,
    },

    {
      title:"<b>  <u> The Legs </u> </b>",
      image:"assets/images/honeybee_legs.jpg",
      description:`The Honeybee has three pairs of six segmented legs, these segments mean the legs are very flexible. The front legs
      are specially designed to clean the antennae, the middle set aid in collecting pollen, and the rear set have a special
      secion devoted to pollen collection called a <b>Pollen Basket</b> (See next section). Each leg has claws for gripping
      and sticky pads that assist the bee in landing on slick surfaces. Bees also have taste receptors on the tips of their
      legs. <br /> <br /> The worker bee has a different set of back legs than the other bees in the hive, containing special
      combs and a pollen press. These are used by to brush, collect, pack, and carry pollen and propolis back to the hive.`,
    },

    {
      title:"<b> <u> The Pollen Baskets </u> </b>",
      image:"assets/images/honeybee_pollen_basket.jpg",
      description:`The pollen basket is located the bees' hind legs and consists of hairs surrounding a concave region in which the bee
      stores pollen to take back to the hive. When a bee visits a flower, she grooms herself and brushes the pollen sticking
      to her hairy body towards her hind legs. It is at this point that the middle pair of legs packs the pollen into the
      basket. <br /> <br /> To help keep the pollen together during flight, some nectar is mixed in. Finally, the hairs
      on the pollen basket hold it all in place.​`,
    },

  ];

}