import { LightningElement } from 'lwc';

export default class ChildA3 extends LightningElement {

    sendMessageToChildB;
     // Dispatch custom event with data
    clickHandler(event) {
        this.sendMessageToChildB = event.target.value;

        const parentComp = new CustomEvent('eventfroma', {
            detail: 'Message from Child A3'
        });
        this.dispatchEvent(parentComp);
    }
}