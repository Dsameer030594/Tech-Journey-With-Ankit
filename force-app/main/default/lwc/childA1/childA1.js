import { api, LightningElement } from 'lwc';

export default class ChildA1 extends LightningElement {

    @api messageA;

    @api receiveValueFromParent1(value) {
        this.messageA = value;
    }
}