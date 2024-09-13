import { LightningElement } from 'lwc';

export default class ParentP1 extends LightningElement {

    // If there are 3 components child A and Child B and they share the same parent how can we communicate from Parent to both child 
    //in the LWC


    passValueToChildA1;
    passValueToChildB1;

    
    handleSendMessage(event) {
        this.passValueToChildA1 = event.target.value;
        const childCompA = this.template.querySelector('c-child-a1');

        childCompA.receiveValueFromParent1(this.passValueToChildA1);

        this.passValueToChildB1 = event.target.value;
        const childCompB = this.template.querySelector('c-child-b1');

        childCompA.receiveValueFromParent1(this.passValueToChildB1);
    }

    
}