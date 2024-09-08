import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
export default class GetPicklistValuesDemo2 extends LightningElement {

    value;

    @wire(getObjectInfo, {
        objectApiName : ACCOUNT_OBJECT
    })
    accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_INDUSTRY

    })
    industryPicklist;

    handleChange(event){
        this.value = event.target.value;
    }
}