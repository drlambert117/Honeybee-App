import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-worker-about',
  templateUrl: 'about.html'
})
export class WorkerAboutPage {

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

    title : string = 'The Worker Bee';
  
    segment : string = "Appearance";
  
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