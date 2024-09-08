import { LightningElement, api } from 'lwc';

export default class NovDecChildComp extends LightningElement {

    @api childCompLabel

    valueFromParent;

    valueToParent;

   @api receiveValueFromParent(value) {
        this.valueFromParent = value;
        
   }
    
    handleChange(event) {
        this.valueToParent = event.target.value;

        const parentComp = new CustomEvent('updatetask', {
            'detail': this.valueToParent
        });
        this.dispatchEvent(parentComp);
    }
}