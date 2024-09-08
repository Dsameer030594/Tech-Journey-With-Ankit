import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
export default class LightningRecordFormDemo extends NavigationMixin(LightningElement) {
    
    @api recordId;
    @api objectApiName;

    // define property : the way you mention field sequence, this will appear on UI

    fieldList = [NAME_FIELD, INDUSTRY_FIELD, RATING_FIELD, REVENUE_FIELD];

    // toast Events
    
    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message: 'Record Updated Successfully',
            variant: "success"
        });
        this.dispatchEvent(event);
    }

    navigateToRecordPage(event) {
 
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                objectApiName: 'Account',
                actionName: 'view'
            }
        };
        this[NavigationMixin.Navigate](pageReference);
    }
}
