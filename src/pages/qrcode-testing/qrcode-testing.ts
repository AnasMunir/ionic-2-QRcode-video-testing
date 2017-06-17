import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRCodeComponent } from 'angular2-qrcode';

@IonicPage()
@Component({
  selector: 'page-qrcode-testing',
  templateUrl: 'qrcode-testing.html',
})
export class QrcodeTesting {

  qrcodeValue: string = "http://www.nytimes.com";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodeTesting');
  }

  generateBarcode() {
    // this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com")
    //   .then(
    //   () => console.log("data", data)
    //   )
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.qrcodeValue)
      .then(value => console.log(value));
    // .catch(
    // (error) => console.error("error encoding", error)
    // );
  }

  scanBarcode() {
    let options: BarcodeScannerOptions = {
      showFlipCameraButton: true,
      showTorchButton: true,
      formats: 'QR_CODE'
    }

    this.barcodeScanner.scan(options).then((barcodeData) => {
      console.log("Success! Barcode data is here", barcodeData);
    }, (err) => {
      console.error("error scanning", err);
    });
  }

}
