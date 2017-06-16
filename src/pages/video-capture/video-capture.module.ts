import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoCapture } from './video-capture';

@NgModule({
  declarations: [
    VideoCapture,
  ],
  imports: [
    IonicPageModule.forChild(VideoCapture),
  ],
  exports: [
    VideoCapture
  ]
})
export class VideoCaptureModule {}
