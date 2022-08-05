import { LightningElement, track } from 'lwc';
export default class CalculatorInLwc extends LightningElement {
    resultValue = 0;   
    soma() {
        this.resultValue = this.resultValue + 1;
    }
subtrai() {
        this.resultValue = this.resultValue - 1;
    }
limpar() {
        this.resultValue = 0;
    }

}