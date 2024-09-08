import { LightningElement } from 'lwc';

export default class CoditionalRendering extends LightningElement {

    displayMessage = false;

    changeHandler(event){
        //event.target.value;

        // toggle handling in js
        this.displayMessage = !this.displayMessage;
    }
}