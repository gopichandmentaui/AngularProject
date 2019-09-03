import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { DataBusService } from 'src/app/core/services/data-bus.service';

@Component({
  selector: 'app-pdp-overview',
  templateUrl: './pdp-overview.component.html',
  styleUrls: ['./pdp-overview.component.scss']
})
export class PdpOverviewComponent implements OnInit {
  overviewDetails$: Observable<any>;

  constructor(private el: ElementRef, private data: DataBusService) { }

  ngOnInit() {
      this.overviewDetails$ = this.data.getOverviewData();
  }

  scrollToDescription() {
    const section = document.getElementById("section2");
    const section1 = document.getElementById("section1");
    window.scrollTo(0, section.offsetTop - 144);
    if(section !=section1){
      console.log("section" + section);
    }
    
  }

}
