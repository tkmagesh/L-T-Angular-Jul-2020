import { Component } from '@angular/core';
import { CalculatorModel } from "./calculatorModel";
@Component({
    selector : 'app-calculator', 
    templateUrl : './calculator.component.html',
    styleUrls : ['./calculator.component.css'],
    providers : [CalculatorModel]
})
export class CalculatorComponent{
    constructor(public model : CalculatorModel){
        
    }
}