import { LightningElement } from 'lwc';

export default class Parent3 extends LightningElement {

    messageFromA;

    handleMessageFromA(event) {
        // Capture event data from Child A and pass it to Child B
        this.messageFromA = event.detail;
    }
}