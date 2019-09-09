import { Component, OnInit, ElementRef, HostListener, NgZone } from '@angular/core';
import { DataBusService } from 'src/app/core/services/data-bus.service';
@Component({
  selector: 'app-pdp-specification-tab',
  templateUrl: './pdp-specification-tab.component.html',
  styleUrls: ['./pdp-specification-tab.component.scss']
})
export class PdpSpecificationTabComponent implements OnInit {

  private _specificationDetails;
  private _isFirstOpen = true;
  private _show: Map<number, boolean> = new Map();
  private defaultVisibleListCount: number = 10;

  constructor(private el: ElementRef, private data: DataBusService,private ngZone:NgZone) {
    window.onresize = (e) =>
    {
        //ngZone.run will help to run change detection
        this.ngZone.run(() => {
            // console.log("Width: " + window.innerWidth);
            // console.log("Height: " + window.innerHeight);
            if (window.screen.width <= 991) { // 768px portrait
              this._isFirstOpen = false;
            }
            else{
              this._isFirstOpen = true;
            }
        });
    };
   }

  ngOnInit() {
    if (window.screen.width <= 991) { // 768px portrait
      this._isFirstOpen = false;
    }
    else{
      this._isFirstOpen = true;
    }
    this.data.getSpecificationsData().subscribe(
      res => {
        if (res.length > 0) {
          this._specificationDetails = res;
          this._specificationDetails.forEach((item, index) => {
            this._show.set(index, false);
          });
        }
      },
      console.error
    );
  }
  toggle(index: number) {
    this._show.set(index, !this._show.get(index));
  }

  readMore(index: number) {
    return this._show.get(index) ? "Show Less" : "Show More"
  }

  getShowCount(index: number, length: number) {
    return this._show.get(index) ? length : this.defaultVisibleListCount;
  }

  get isFirstOpen() {
    return this._isFirstOpen;
  }

  get specificationDetails() {
    return this._specificationDetails;
  }

//   @HostListener('window:resize')
//   onResize(event) {

//     const innerWidth = event.target.innerWidth;
//     console.log(innerWidth);
 
//     if (innerWidth <= 991) {
//       this._isFirstOpen = false;
//     }
//  }
}
