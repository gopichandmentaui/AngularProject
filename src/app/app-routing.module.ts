import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PdpDocumentationTabComponent } from './pdp-documentation-tab/pdp-documentation-tab.component';
// import { PdpSpecificationTabComponent } from './pdp-specification-tab/pdp-specification-tab.component';
// import { PdpStickyBarComponent } from './pdp-sticky-bar/pdp-sticky-bar.component';

const routes: Routes = [
//  {
//    path: "specification",
//    component: PdpSpecificationTabComponent,
//    pathMatch: "full"
//  },
//  {
//    path: "documentation",
//    component: PdpDocumentationTabComponent
//  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
