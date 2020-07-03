import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/* 
declarations - UI entities of the application (Components, Pipes, Directives)
providers - NON UI entities of the application (Services)
imports - dependent modules
bootstrap - root component(s)
*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
