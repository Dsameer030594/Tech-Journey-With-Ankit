import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
export default class GetPicklistValuesDemo extends LightningElement {

    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    }) 
    accountProperty;

    @wire(getPicklistValues, {
        recordTypeId: '$accountProperty.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_INDUSTRY,
        
    }) 
    outputFunction({data, error}){
        if(data){
            console.log('Picklist data', data);
        } else if(error){
            console.log('picklist error', error);
        }
    }
}