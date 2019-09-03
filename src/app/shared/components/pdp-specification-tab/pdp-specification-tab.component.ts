import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBusService } from 'src/app/core/services/data-bus.service';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-pdp-specification-tab',
  templateUrl: './pdp-specification-tab.component.html',
  styleUrls: ['./pdp-specification-tab.component.scss']
})
export class PdpSpecificationTabComponent implements OnInit {

  specificationDetails$: Observable<any>;
  isFirstOpen = true;
  public show:boolean = false;
  public readMore:any = 'Show More';
  
  constructor(private el: ElementRef, private data: DataBusService) { }

  ngOnInit() {
    this.specificationDetails$ = this.data.getSpecificationsData();
  }
  toggle(index: number, div: string) {
    this.show = !this.show;
    

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.readMore = "Show Less";
      
    else
      this.readMore = "Show More";
  }
}
