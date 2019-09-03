import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdpOverviewComponent } from './components/pdp-overview/pdp-overview.component';
import { PdpImageComponent } from './components/pdp-image/pdp-image.component';
import { PdpStickyBarComponent } from './components/pdp-sticky-bar/pdp-sticky-bar.component';
import { PdpLongDescriptionComponent } from './components/pdp-long-description/pdp-long-description.component';
import { PdpSpecificationTabComponent } from './components/pdp-specification-tab/pdp-specification-tab.component';
import { PdpDocumentationTabComponent } from './components/pdp-documentation-tab/pdp-documentation-tab.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AccordionModule } from 'ngx-bootstrap/accordion'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';


/*Group the components, pipes, services, directives in array-variables 
and use these variables with spread operators 
under respective fields inside NgModule like below*/

const components = [
  PdpOverviewComponent,
  PdpImageComponent,
  PdpStickyBarComponent,
  PdpLongDescriptionComponent,
  PdpSpecificationTabComponent,
  PdpDocumentationTabComponent,
];

const services = [

];

const pipes = [

];

const directives = [

];
@NgModule({
  declarations: [
    ...components,
    ...directives,
    ...pipes
  ],
  imports: [
    CommonModule,
    NgxGalleryModule,
    BrowserAnimationsModule, 
    AccordionModule.forRoot(), 
    BsDropdownModule.forRoot(), 
    ModalModule.forRoot(), 
    TabsModule.forRoot()
  ],
  providers: [
    ...services
  ],
  exports: [
    ...components,
    AccordionModule, 
    BsDropdownModule, 
    ModalModule, 
    TabsModule
  ]
})
export class SharedModule { }
