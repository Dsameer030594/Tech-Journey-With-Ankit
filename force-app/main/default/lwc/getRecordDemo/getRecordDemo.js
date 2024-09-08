import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import {getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class GetRecordDemo extends LightningElement {
    @api recordId;
    accName;
    accRevenue;

    @wire(getRecord, {
        recordId: '$recordId',
        fields: [ACCOUNT_NAME_FIELD, ACCOUNT_REVENUE_FIELD]
    })
    wiredAccount({ data, error }) {
        if (data) {
           // this.accName = data.fields.Name.value;
                  
            // we dont have Display value for name field
            this.accName = getFieldValue(data, ACCOUNT_NAME_FIELD);
            
                  // we  have Display value for Annual Revenue field
            //this.accRevenue = data.fields.AnnualRevenue.value;
            this.accRevenue = getFieldDisplayValue(data, ACCOUNT_REVENUE_FIELD);
           
            
        } else if (error) {
            console.log('Error retrieving account data:', error);
        }
    }
}
  