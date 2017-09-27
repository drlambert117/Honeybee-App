import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { HoneybeePage } from '../pages/honeybee/honeybee';
import { FastFactsPage } from '../pages/fast-facts/fast-facts';
import { AnatomyPage } from '../pages/anatomy/anatomy';

import { HiveHierarchyPage } from '../pages/hive-hierarchy/hive-hierarchy';
//subpages for HiveHierarchyPage
import { QueenAboutPage } from '../pages/hive-hierarchy/queen-bee/about/about';
import { DroneAboutPage } from '../pages/hive-hierarchy/drone-bee/about/about';
import { WorkerAboutPage } from '../pages/hive-hierarchy/worker-bee/about/about';


//Modals
import { HeadModal } from '../pages/anatomy/anatomy-modals/head/head';
import { ThoraxModal } from '../pages/anatomy/anatomy-modals/thorax/thorax';
import { AbdomenModal } from '../pages/anatomy/anatomy-modals/abdomen/abdomen';

//Services
import { DataService } from '../services';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Services


@NgModule({
  declarations: [
    //Pages
    MyApp,
    HomePage,
    HoneybeePage,
    FastFactsPage,
    AnatomyPage,
    HiveHierarchyPage,
    QueenAboutPage,
    DroneAboutPage,
    WorkerAboutPage,

    //Modals
    HeadModal,
    ThoraxModal,
    AbdomenModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //Pages
    MyApp,
    HomePage,
    HoneybeePage,
    FastFactsPage,
    AnatomyPage,
    HiveHierarchyPage,
    QueenAboutPage,
    DroneAboutPage,
    WorkerAboutPage,

    //Modals
    HeadModal,
    ThoraxModal,
    AbdomenModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
