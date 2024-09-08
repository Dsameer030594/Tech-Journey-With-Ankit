import { LightningElement, wire } from 'lwc';
import getContactList from "@salesforce/apex/ContactsController.getContactList";
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';

export default class ContactList extends LightningElement {
    
    @wire(getContactList) contacts;

    @wire(MessageContext)
    messageContext;

    selectedContact;
    selectionHandler(event) {
        let selectedContactId = event.detail;
        console.log(selectedContactId);

        this.selectedContact = this.contacts.data.find(
            (curritem) => curritem.Id === selectedContactId);
        
        const payload = { lmsData: this.selectedContact};

        publish(this.messageContext, recordSelected, payload);
        
    }
}
