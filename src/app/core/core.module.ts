import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';


/*Group the components, pipes, services, directives in array-variables 
and use these variables with spread operators 
under respective fields inside NgModule like below*/

const components = [
  HomeComponent
];

const services = [
  
];

const pipes = [

];

const directives = [

];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...components
  ]
})
export class CoreModule { }
