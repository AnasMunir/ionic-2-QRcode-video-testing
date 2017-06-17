import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodeTesting } from './qrcode-testing';
import { QRCodeModule } from 'angular2-qrcode';

@NgModule({
  declarations: [
    QrcodeTesting,
  ],
  imports: [
    IonicPageModule.forChild(QrcodeTesting),
    QRCodeModule
  ],
  exports: [
    QrcodeTesting
  ]
})
export class QrcodeTestingModule {}
