import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { DataBusService } from 'src/app/core/services/data-bus.service';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-pdp-documentation-tab',
    templateUrl: './pdp-documentation-tab.component.html',
    styleUrls: ['./pdp-documentation-tab.component.scss']
})
export class PdpDocumentationTabComponent implements OnInit {
    private _documentationDetails: Observable<any>;
    private _isFirstOpen = true;

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
        this.data.getDocumentationsData().subscribe(
            res => {
                    this._documentationDetails = res;
            },
            console.error
        );

        if (window.screen.width <= 991) { // 768px portrait
            this._isFirstOpen = false;
        }
        else {
            this._isFirstOpen = true;
        }

    }
    get isFirstOpen() {
        return this._isFirstOpen;
    }

    get documentationDetails() {
        return this._documentationDetails;
    }
}
