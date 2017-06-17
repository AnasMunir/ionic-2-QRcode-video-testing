import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MediaCapture, CaptureVideoOptions, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
// import * as firebase from 'firebase';
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
    private plt: Platform,
    private file: File) {

    // let storageRef = firebase.storage().ref();
    // var videos = storageRef.child('videos');
    // console.log(storageRef);
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
      sourceType: 1,
      mediaType: 1

    };

    let data = await this.camera.getPicture(options);
    console.log("video data:", data);
    video.src = data;
    video.play();
  }

  choseFile() {

    // this.file.checkDir(this.file.dataDirectory, 'mydir')
    //   .then(_ => console.log('Directory exists'))
    //   .catch(err => console.log('Directory doesnt exist'));

    // console.log('this.file.applicationDirectory', this.file.applicationDirectory);

    // this.file.resolveLocalFilesystemUrl(this.file.dataDirectory)
    //   .then((data) => {
    //     console.log("resolveLocalFilesystemUrl", data);

    //   }, (error) => console.error("this.file.dataDirectory error", error));

    // console.log(this.filePath); console.log(this.fileName); console.log(this.localUrl);
    // this.file.checkDir(this.file.dataDirectory, this.fileName).then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));

    // this.file.resolveLocalFilesystemUrl(this.filePath).then(
    //   (data) => {
    //     console.log('data.toURL()', data.toURL());
    //     console.log('data.filesystem', data.filesystem);
    //     console.log('data.nativeURL', data.nativeURL);
    //     console.log('data.name', data.name);
    //     console.log('data', data);
    //     data.getParent((parent) => console.log(parent));
    //     const fileReader = new FileReader();

    //     fileReader.onloadend = (result: any) => {
    //       console.log("fileReader", result);

    //     }
    //   },
    //   (error) => console.error(error)
    // );
    let filePath;
    let path = this.filePath.substring(0, this.filePath.lastIndexOf('/') + 1);
    let tempPath = path.substring(path.indexOf('e/') + 1, path.lastIndexOf('/') + 1);

    let name = this.filePath.substring(this.filePath.lastIndexOf('/') + 1, this.filePath.length);

    if (this.plt.is('ios')) {
      filePath = "file://" + tempPath
    } else {
      filePath = path;
    }
    console.log("this.filepath", this.filePath);
    console.log("path", path);
    console.log("filePath", filePath);
    console.log("name", name);


    this.file.readAsArrayBuffer(filePath, name)
      .then(
      (success) => {
        console.log("success ", success);

        let blob = new Blob([success], { type: "video/mp4" });
        console.log(blob);
        // this.uploadToFirebase(blob);
      }, (error) => {
        console.error(error);
      }
      )
  }
  testQrCode() {
    this.navCtrl.push("QrcodeTesting");
  }

  // uploadToFirebase(blob: Blob) {

  //   let storageRef = firebase.storage().ref()
  //   var metadata = {
  //     contentType: 'video/mp4 '
  //   };

  //   let uploadTask = storageRef.child('videos' + "my_video").put(blob, metadata);
  //   // Listen for state changes, errors, and completion of the upload.
  //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  //     (snapshot) => {
  //       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log('Upload is ' + progress + '% done');
  //       switch (snapshot.state) {
  //         case firebase.storage.TaskState.PAUSED: // or 'paused'
  //           console.log('Upload is paused');
  //           break;
  //         case firebase.storage.TaskState.RUNNING: // or 'running'
  //           console.log('Upload is running');
  //           break;
  //       }
  //     }, (error) => {
  //       console.error("uploading error", error);
  //       // A full list of error codes is available at
  //       // https://firebase.google.com/docs/storage/web/handle-errors
  //       //     switch (error.code) {
  //       //       case 'storage/unauthorized':
  //       //         // User doesn't have permission to access the object
  //       //         break;

  //       //       case 'storage/canceled':
  //       //         // User canceled the upload
  //       //         break;

  //       // ...

  //       // case 'storage/unknown':
  //       //   // Unknown error occurred, inspect error.serverResponse
  //       //   break;
  //       // }
  //     }, () => {
  //       // Upload completed successfully, now we can get the download URL
  //       var downloadURL = uploadTask.snapshot.downloadURL;
  //       console.log("downloadURL", downloadURL)
  //     });
  // }

}
