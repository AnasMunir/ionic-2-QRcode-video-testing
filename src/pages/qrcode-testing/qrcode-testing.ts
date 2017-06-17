import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qrcode-testing',
  templateUrl: 'qrcode-testing.html',
})
export class QrcodeTesting {

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
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, "")
      .then(value => console.log(value));
      // .catch(
      // (error) => console.error("error encoding", error)
      // );
  }

}
