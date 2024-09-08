import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class ContactFilter extends NavigationMixin (LightningElement) {

    selectedAccountId;
    selectedIndustry;
    isButtonDisabled = true;
    selectedRecordHandler(event) {
        this.selectedAccountId = event.detail;
        console.log(this.selectedAccountId);
        if (this.selectedAccountId === selected) {
            this.isButtonDisabled = false;
        } else {
            this.isButtonDisabled = true;
        }
    }
    @wire(getObjectInfo, {
        objectApiName: ACCOUNT_OBJECT
    })
    accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_INDUSTRY
    })
    industryPicklist;

    handleChange(event) {
        this.selectedIndustry = event.target.value;
    }
    addNewContact() {
        let defaultValue = encodeDefaultFieldValues({
            AccountId: this.selectedAccountId
        });
        //create pageReference
        let pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValue
            }
        };
        this[NavigationMixin.Navigate](pageReference);
    }
   
 
}