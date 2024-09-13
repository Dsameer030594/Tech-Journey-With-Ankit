import { LightningElement } from 'lwc';

export default class ChildB2 extends LightningElement {

    messageToParent2;
    clickHandler(event) {
        this.messageToParent2 = event.target.value;

        const parent2Comp = new CustomEvent('eventfromb', {
            detail: 'Message from Child B2'
        });
        this.dispatchEvent(parent2Comp);
    }
}