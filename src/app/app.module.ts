import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
