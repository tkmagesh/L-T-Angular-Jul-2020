import { Component } from '@angular/core';

@Component({
    selector : 'app-calculator', 
    templateUrl : './calculator.component.html',
    styleUrls : ['./calculator.component.css']
})
export class CalculatorComponent{
    result : number = 0;
    n1 : number = 0;
    n2 : number = 0;

    setN1(value : number){
        this.n1 = value;
    }

    setN2(value : number){
        this.n2 = value;
    }

    onAddClick(){
        this.result = this.n1 + this.n2;
    }

    onSubtractClick(){
        this.result = this.n1 - this.n2;
    }

    onMultiplyClick(){
        this.result = this.n1 * this.n2;
    }

    onDivideClick(){
        this.result = this.n1 / this.n2;
    }
}