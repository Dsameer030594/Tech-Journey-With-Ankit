import { LightningElement, api } from 'lwc';

export default class ChildLightningWebComponent extends LightningElement {

    @api name;

    @api showMessage(greeting) {
        alert(greeting.toUpperCase());
    }
}