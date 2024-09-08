import { LightningElement, wire } from 'lwc';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import OPPORTUNITY_NAME from '@salesforce/schema/Opportunity.Name';
import {getRecords} from 'lightning/uiRecordApi';

export default class GetRecordsDemo extends LightningElement {

    outputs;
    errors;

@wire(getRecords, {
    records : [
        {
            recordIds : ['0015j00001Vigz4AAB'],
            fields : [ACCOUNT_NAME_FIELD],
        },
        {
            recordIds : ['0035j00001JOnVZAA1'],
            fields : [CONTACT_NAME_FIELD],

        },
        {
            recordIds : ['0015j00001XE9xyAAD'],
            fields : [CONTACT_NAME_FIELD],

        },
        {
            recordIds : ['0065j00001YbcSCAAZ'],
            fields : [OPPORTUNITY_NAME],

        }
    ]
})
 outputFunction({data, error}){
    if(data){
        console.log('data', data);
        this.outputs = data;
        this.errors = null;
    } else if(error){
        console.log('error', error);
        this.outputs = null;
        this.errors = error;
    }    
 }
}