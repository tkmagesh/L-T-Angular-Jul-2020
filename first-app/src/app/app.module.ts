import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from "./calculator/calculator.component";
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';

/* 
declarations - UI entities of the application (Components, Pipes, Directives)
providers - NON UI entities of the application (Services)
imports - dependent modules
bootstrap - root component(s)
*/


@NgModule({
  declarations: [
    AppComponent
    , CalculatorComponent
    , SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    , CalculatorComponent
    , SalaryCalculatorComponent
  ]
})
export class AppModule { }
