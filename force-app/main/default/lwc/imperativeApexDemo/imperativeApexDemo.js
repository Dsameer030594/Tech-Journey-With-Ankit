import { LightningElement, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class ImperativeApexDemo extends LightningElement {

    data = [];
    options;
    columns = [
    { label: 'ID', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name', type: 'Text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Rating', fieldName: 'Rating' },
    ];

    selectedIndustry;


    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    accountInfo;
        
    @wire(getPicklistValues, {
        recordTypeId: "$accountInfo.data.defaultRecordTypeId",
        fieldApiName: ACCOUNT_INDUSTRY
    })
    industryPicklist;
        
        
   
    clickHandler() {
        getAccountList({
            inputIndustry : this.selectedIndustry
        })
            .then(result => {
                console.log('Account Records', result);
                this.data = result;

            })
            .catch(error => {
                console.log('Account error', error);
                this.data = null;
        }) 
    }
    
    handleChange(event) {
        this.selectedIndustry = event.target.value;    
    }
    
}