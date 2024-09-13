import { api, LightningElement } from 'lwc';

export default class ChildB1 extends LightningElement {

    @api messageB;


   @api  receiveValueFromParent1(value) {
        this.messageB = value;
    }

}