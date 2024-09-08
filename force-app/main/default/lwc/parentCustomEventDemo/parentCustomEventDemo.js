import { LightningElement } from 'lwc';

export default class ParentCustomEventDemo extends LightningElement {

    
    displayMessage = false;

    displayMessageHandler(event) {
        this.displayMessage = true;
    }
}