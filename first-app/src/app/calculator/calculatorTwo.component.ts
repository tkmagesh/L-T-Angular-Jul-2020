import { Component } from "@angular/core";
import { CalculatorModel } from "./calculatorModel";

@Component({
    selector : 'app-calculator-2',
    templateUrl: './calculatorTwo.component.html',
    providers : [CalculatorModel]
})
export class CalculatorTwoComponent{
    
    constructor(public model : CalculatorModel){
        
    }

    selectedOperator : string = '';

    onCalculateClick() {
        if (this.selectedOperator !== '')
            this.model[this.selectedOperator]();
        /* switch (this.selectedOperator) {
            case 'add':
                this.model.add();
                break;
            case 'subtract':
                this.model.subtract();
                break;
            case 'multiply':
                this.model.multiply();
                break;
            case 'divide':
                this.model.divide();
                break;
            default:
                break;
        } */
    }
}