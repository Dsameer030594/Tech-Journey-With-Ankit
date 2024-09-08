import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {

    @api contact;

    // Prevent the Anchor element from Navigation
    clickHandler(event) {
        event.preventDefault();

        // 1. Creation of Custom Event
        const selectionEvent = new CustomEvent('selection', {
            detail: this.contact.Id
        });

        // 2. Dispatch the eent
        this.dispatchEvent(selectionEvent);

    }
    
}