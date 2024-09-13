import { LightningElement } from 'lwc';

export default class ChildA2 extends LightningElement {

    messageToParent2;
    clickHandler(event) {
        this.messageToParent2 = event.target.value;

        const parent2Comp = new CustomEvent('eventfroma', {
            detail: 'Message from Child A2'
        });
        this.dispatchEvent(parent2Comp);
    }
}