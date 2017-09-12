import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

//Pages
import { HomePage } from '../pages/home/home';
import { HoneybeePage } from '../pages/honeybee/honeybee';
import { FastFactsPage } from '../pages/fast-facts/fast-facts';
import { AnatomyPage } from '../pages/anatomy/anatomy';
import { GenderPage } from '../pages/gender/gender';

//Modals
import { HeadModal } from '../pages/anatomy/anatomy-modals/head/head';
import { ThoraxModal } from '../pages/anatomy/anatomy-modals/thorax/thorax';
import { AbdomenModal } from '../pages/anatomy/anatomy-modals/abdomen/abdomen';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    //Pages
    MyApp,
    HomePage,
    HoneybeePage,
    FastFactsPage,
    AnatomyPage,
    GenderPage,

    //Modals
    HeadModal,
    ThoraxModal,
    AbdomenModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    //Pages
    MyApp,
    HomePage,
    HoneybeePage,
    FastFactsPage,
    AnatomyPage,
    GenderPage,

    //Modals
    HeadModal,
    ThoraxModal,
    AbdomenModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
