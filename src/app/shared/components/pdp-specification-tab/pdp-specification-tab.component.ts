import { Component, OnInit, ElementRef } from '@angular/core';
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
  private defaultVisibleListCount: number = 5;

  constructor(private el: ElementRef, private data: DataBusService) { }

  ngOnInit() {
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
}
