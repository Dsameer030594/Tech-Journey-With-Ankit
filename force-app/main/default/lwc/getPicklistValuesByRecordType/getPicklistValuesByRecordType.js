import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'; 
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
export default class GetPicklistValuesByRecordType extends LightningElement {

    value;
@wire(getObjectInfo, { 
    objectApiName: ACCOUNT_OBJECT
})
accountInfo;

@wire(getPicklistValues, {
    recordTypeId: '$accountInfo.data.defaultRecordTypeId',
    fieldApiName: ACCOUNT_INDUSTRY
})
industryPicklist;

@wire(getPicklistValuesByRecordType, {
    objectApiName: ACCOUNT_OBJECT,
    recordTypeId: '$accountInfo.data.defaultRecordTypeId',

})
accountInfoPickList;   
//Function({data, error}){
//     if(data){
//         console.log('Account picklist data', data);
//     } else if(error){
//         console.log('Account error', error);
//     }
// }

    handleChange(event){
        this.value = event.target.value;
    }
}