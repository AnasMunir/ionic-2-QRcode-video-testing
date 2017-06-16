import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, CaptureVideoOptions, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
declare var window;
/**
 * Generated class for the VideoCapture page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-video-capture',
  templateUrl: 'video-capture.html',
})
export class VideoCapture {
  @ViewChild("ourVideo") ourVideo: ElementRef;

  videoOptions: CaptureVideoOptions;
  fileName: string;
  filePath: string;
  localUrl: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private mediaCapture: MediaCapture,
    private camera: Camera,
    private file: File) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoCapture');
  }

  async takeVideo() {
    try {
      this.videoOptions = {
        limit: 1,
        duration: 10
      };
      let options: CaptureVideoOptions = { duration: 10 };

      this.mediaCapture.captureVideo(options)
        .then(
        (data: MediaFile[]) => {
          console.log(data)
          this.filePath = data[0].fullPath;
          this.fileName = data[0].name;
          this.localUrl = data[0]['localURL'];
        },
        (error: CaptureError) => console.error(error)
        );

    } catch (error) {
      console.error("video capturing error", error);
    }

  }

  async selectVideo() {
    let video = this.ourVideo.nativeElement;
    let options: CameraOptions = {
      sourceType: 2,
      mediaType: 1

    };

    let data = await this.camera.getPicture(options);
    console.log("video data:", data);
    video.src = data;
    video.play();
  }

  choseFile() {
    console.log(this.filePath); console.log(this.fileName); console.log(this.localUrl);
    this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
    
    this.file.resolveLocalFilesystemUrl(this.filePath).then(
      (data) => {
        console.log(data.toURL());
        console.log(data.filesystem);
        console.log(data.nativeURL);
        console.log(data.name);
        console.log(data);
        data.getParent((parent) => console.log(parent));
        const fileReader = new FileReader();

        fileReader.onloadend = (result: any) => {
          console.log("fileReader", result);

        }
      },
      (error) => console.error(error)
    );
    this.file.readAsArrayBuffer("/storage/emulated/0/DCIM/Camera/VID_20170616_042241.mp4/", "VID_20170616_042241.mp4")
      .then(
      (success) => {
        console.log("success ", success);

        let blob = new Blob([success], { type: "video/mp4" });
        console.log(blob);
      }, (error) => {
        console.error(error);
      }
      )
  }

}
