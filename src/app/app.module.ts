import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*When you want to use NgIf, NgFor*/
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
/*When you want to build template driven forms (includes NgModel)*/
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
