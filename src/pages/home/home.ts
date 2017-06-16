import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  @ViewChild('myvideo')  myvideo: ElementRef;

  videOptions: VideoOptions;
  // videoUrl: string = "https://firebasestorage.googleapis.com/v0/b/tkride-user-1481096790043.appspot.com/o/buyer%2Fd0wtYeYlB2hJP53c1rlj7RInlrr1%2FCat%20food%2FAngular%202%20Tutorials%20Premium%20Quality%20Tutorials%20on%20Angular%202%20a.mp4?alt=media&token=e8fdfdf6-9417-4cef-8132-7c624eb4938b";
  videoUrl: string = "https://firebasestorage.googleapis.com/v0/b/tkride-user-1481096790043.appspot.com/o/buyer%2Fd0wtYeYlB2hJP53c1rlj7RInlrr1%2FCat%20food%2F1-Firebase%20Real-Time%20Database%20Hello%20World%20-%20First%20Query%20-%20Debug%20Websockets%20!.mp4?alt=media&token=9ae33f19-e9b0-452c-bb7e-6ed5ba3d2f32";

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }
  stopVideo() {
    this.videoPlayer.close();
    console.log("The video was successfully closed");
  }
  async playVideo() {
    try {
      this.videOptions = {
        volume: 1.0
      }
      // this.videoUrl = "http://techslides.com/demos/sample-videos/small.mp4";
      // setTimeout(() => {
      //   this.stopVideo();
      // }, 3000);
      await this.videoPlayer.play(this.videoUrl, this.videOptions);
      console.log("the video has closed");
    } catch (error) {
      console.error(error);
    }
  }

  htmlVideoPlay() {
    let video = this.myvideo.nativeElement;
    video.src = this.videoUrl;
    video.play();
  }

  testVideoCapture() {
    this.navCtrl.push("VideoCapture")
  }
}
