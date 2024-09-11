import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import ACCOUNT_SLAEXPIRATION_DATE_FIELD from "@salesforce/schema/Account.SLAExpirationDate__c";

export default class RecordEditFormDemo extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName = ACCOUNT_OBJECT;

    fieldObject = {
        name: ACCOUNT_NAME_FIELD,
        industry: ACCOUNT_INDUSTRY_FIELD,
        slaDate: ACCOUNT_SLAEXPIRATION_DATE_FIELD
    }
    successHandler(event) {
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id, objectApiName: this.objectApiName,
                actionName: 'view'
            }
        };
        this[NavigationMixin.Navigate](pageReference);
    }
    errorHandler(event) {
        const custevent = new ShowToastEvent({
            title: 'Error', message: event.detail.message, variant: 'error', mode: 'dismissable'
        });
        this.dispatchEvent(custevent);
    }
    submitHandler(event) {
        event.preventDefault();
        const fields = event.detail.fields;
        if (!fields.Industry) {
            fields.Industry = "Energy";
        }
        this.template.querySelector("lightning-record-edit-form").submit(fields);
    }

    resetHandler() {
        let inputFields = this.template.querySelectorAll("lightning-input-field");
        inputFields.forEach(currItem => currItem.reset());
    }
}
