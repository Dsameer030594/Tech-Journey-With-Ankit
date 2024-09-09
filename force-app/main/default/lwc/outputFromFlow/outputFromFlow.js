import { api, LightningElement } from 'lwc';

import {FlowAttributeChangeEvent} from 'lightning/flowSupport';
export default class OutputFromFlow extends LightningElement {

    @api inputName;
    changeHandler(event) {
        this.inputName = event.target.value;

        // notify the flow of the new todo list
        const attributeChangeEvent = new FlowAttributeChangeEvent(
            'inputName',
            this.inputName
        );
        this.dispatchEvent(attributeChangeEvent);
    }
}