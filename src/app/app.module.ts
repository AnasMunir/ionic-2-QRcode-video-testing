import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { VideoPlayer } from '@ionic-native/video-player';
import { MediaCapture } from '@ionic-native/media-capture';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule, } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";
import { MyApp } from './app.component';
import { QRCodeModule } from 'angular2-qrcode';

export const firebaseConfig = {
  apiKey: "AIzaSyAN2qPKANK-NMHjW8Rn1slqVlH71LohHiw",
  authDomain: "tkride-user-1481096790043.firebaseapp.com",
  databaseURL: "https://tkride-user-1481096790043.firebaseio.com",
  projectId: "tkride-user-1481096790043",
  storageBucket: "tkride-user-1481096790043.appspot.com",
  messagingSenderId: "189387222423"
}

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    QRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VideoPlayer,
    MediaCapture,
    Camera,
    BarcodeScanner,
    File,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
