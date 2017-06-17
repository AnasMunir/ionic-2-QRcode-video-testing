import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrcodeTesting } from './qrcode-testing';

@NgModule({
  declarations: [
    QrcodeTesting,
  ],
  imports: [
    IonicPageModule.forChild(QrcodeTesting),
  ],
  exports: [
    QrcodeTesting
  ]
})
export class QrcodeTestingModule {}
