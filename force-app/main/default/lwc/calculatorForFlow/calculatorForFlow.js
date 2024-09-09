import { api, LightningElement } from 'lwc';
import {FlowAttributeChangeEvent} from 'lightning/flowSupport';
export default class CalculatorForFlow extends LightningElement {

    @api inputNumber1 = '';
     @api inputNumber2 = '';
     @api outputResult = '';
    ClickHandler(event) {
        let name = event.target.name;

        if (name === 'add') {
            this.outputResult = Number(this.inputNumber1) + Number(this.inputNumber2);
        }
        else if (name === 'sub') {
            this.outputResult = Number(this.inputNumber1) - Number(this.inputNumber2);
        }
        else if (name === 'mult') {
            this.outputResult = Number(this.inputNumber1) * Number(this.inputNumber2);
        }
        else if (name === 'div') {
            this.outputResult = Number(this.inputNumber1) / Number(this.inputNumber2);
        }

        const attributeChangeEvent = new FlowAttributeChangeEvent(
            'outputResult',
            this.outputResult
        );
        this.dispatchEvent(attributeChangeEvent);
    }
     
}