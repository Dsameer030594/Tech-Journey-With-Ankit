import { LightningElement } from 'lwc';

export default class NovDecParentComp extends LightningElement {

    // 1st Parent To Child Communication 
    // @api Property
    parentCompLabel = 'Enter Childrens Name';

    //2nd @api Method  Parent To Child Communication 
    passValueToChild;

    valueFromChild;

    handleInput(event) {
        this.passValueToChild = event.target.value;
        const childComp = this.template.querySelector('c-nov-dec-child-comp');
        childComp.receiveValueFromParent(this.passValueToChild);
        
    }

    handleChildEvent(event) {
        this.valueFromChild = event.detail;
    }
}