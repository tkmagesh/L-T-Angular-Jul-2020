import { Component } from '@angular/core';
import { SalaryCalculatorModel } from "./salaryCalculatorModel";


@Component({
    selector : 'app-salary-calculator',
    templateUrl: './salaryCalculator.component.html',
    styleUrls: ['./salaryCalculator.component.css']
})
export class SalaryCalculatorComponent{
    //The following is to be strictly avoided as it is in violation of "Dependency Inversion Principle"
    //model : SalaryCalculatorModel = new SalaryCalculatorModel()

    /* 
    model : SalaryCalculatorModel = null;

    constructor(model : SalaryCalculatorModel){
        this.model = model;
    } 
    */

    constructor(public model: SalaryCalculatorModel) {
        
    }

}