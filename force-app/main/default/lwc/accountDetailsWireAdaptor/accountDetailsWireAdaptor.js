import { LightningElement, api, wire } from 'lwc';
import getParentAccounts from '@salesforce/apex/AccountHelper.getParentAccounts';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_PARENT from '@salesforce/schema/Account.ParentId';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_SLA_DATE from '@salesforce/schema/Account.SLAExpirationDate__c';
import ACCOUNT_SLA_TYPE_FIELD from '@salesforce/schema/Account.SLA__c';
import ACCOUNT_NO_OF_LOCATION from '@salesforce/schema/Account.NumberofLocations__c';
import ACCOUNT_DESCRIPTION from '@salesforce/schema/Account.Description';
import { NavigationMixin } from 'lightning/navigation';

export default class AccountDetailsWireAdaptor extends NavigationMixin (LightningElement) {
    parentoptions = [];
    selectedParentAcc = "";
    salnoofLocations = "1";
    selAccName = "";
    selExpDate = null;
    selDescription = "";
    selSlaType = "";
    @api recordId;

    @wire(getParentAccounts) wired_getParentAccount({ data, error }) {
        if (data) {
            this.parentoptions = data.map(currItem => ({
                label: currItem.Name,
                value: currItem.Id
            }));
        } else if (error) {
            console.log('Error while getting Parent Records', error);
        }
    }

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountObjectInfo;

    @wire(getPicklistValues, {
        recordTypeId: '$accountObjectInfo.data.defaultRecordTypeId',
        fieldApiName: ACCOUNT_SLA_TYPE_FIELD
    })
    slapicklist;

    handleChange(event) {
        let { name, value } = event.target;

        if (name === 'ParentAcc') {
            this.selectedParentAcc = value;
        } else if (name === 'AccName') {
            this.selAccName = value;
        } else if (name === 'ExpDate') {
            this.selExpDate = value;
        } else if (name === 'SlaType') {
            this.selSlaType = value;
        } else if (name === 'NoOfLocations') {
            this.salnoofLocations = value;
        } else if (name === 'Description') {
            this.selDescription = value;
        }
    }

    saveRecord() {
        if (this.validateInput()) {
            let inputFields = {};
            inputFields[ACCOUNT_NAME.fieldApiName] = this.selAccName;
            inputFields[ACCOUNT_PARENT.fieldApiName] = this.selectedParentAcc;
            inputFields[ACCOUNT_SLA_TYPE_FIELD.fieldApiName] = this.selSlaType;
            inputFields[ACCOUNT_SLA_DATE.fieldApiName] = this.selExpDate;
            inputFields[ACCOUNT_NO_OF_LOCATION.fieldApiName] = this.salnoofLocations;
            inputFields[ACCOUNT_DESCRIPTION.fieldApiName] = this.selDescription;
            
            let recordInput = {
                apiName: ACCOUNT_OBJECT.objectApiName,
                fields: inputFields,
            };
            createRecord(recordInput)
                .then(result => { 
                    console.log('Account Record Created', result);
    
                    
                    let pageRef = {
                        type: 'standard__recordPage',
                        attributes: {
                            recordId: result.id,
                            objectApiName: ACCOUNT_OBJECT.objectApiName,
                            actionName: 'view'
                        }
                    };
                    this[NavigationMixin.Navigate](pageRef);
                })
                .catch(error => {
                    console.log('Error while creating record', error);
                    alert('Error while creating record');
                });
        } else {
            console.log('Inputs are not valid');
        }
    }

    validateInput() {
        let fields = Array.from(this.template.querySelectorAll('.validateme'));
        let isValid = fields.every(field => field.checkValidity());
        return isValid;
    }
}
