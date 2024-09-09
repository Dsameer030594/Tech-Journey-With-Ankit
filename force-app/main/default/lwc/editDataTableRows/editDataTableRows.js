import { api, LightningElement, wire } from 'lwc';
import getContactsBasedOnAccount from '@salesforce/apex/ContactsController.getContactsBasedOnAccount';
import { deleteRecord, updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LEAD_SOURCE from '@salesforce/schema/Contact.LeadSource';


const ACTIONS = [
    { label: 'view', name: 'view' },
    { label: 'edit', name: 'edit' },
    { label: 'delete', name: 'delete' },
];

const columns = [
    { label: 'FirstName', fieldName: 'FirstName', editable:true},
    { label: 'LastName', fieldName: 'LastName', editable:true},
    { label: 'Phone', fieldName: 'Phone', type: 'phone', editable:true },
    { label: 'Title', fieldName: 'Title', editable:true},
    { label: 'Email', fieldName: 'Email', type: 'email', editable: true },
    {
        label: 'Lead Source',
        fieldName: 'LeadSource',
        type: 'customPickList',
        editable: true,
        typeAttributes: {
            options: {fieldName: 'pickListOptions'},
            value: {fieldName: 'LeadSource'},
            context: {fieldName: 'Id'}
        }
    },
    {
        type: 'action',
        typeAttributes: {
            rowActions: ACTIONS
        }
    }
];
export default class EditDataTableRows extends LightningElement {

    @api recordId;

    contactData = [];

    columns = columns;


    draftValues = [];

    contactResultProperty;

    leadSourceOptions = [];

    viewMode = false;
    editMode = false;
    showModal = false;

    selectedRecordId;


    @wire(getContactsBasedOnAccount, {
        accountId: "$recordId",
        pickList: "$leadSourceOptions"
    })
    getContactOutput(result) {

        this.contactResultProperty = result;
        if (result.data) {
            // this.contactData = result.data;
            this.contactData = result.data.map((currItem) => {
                let pickListOptions = this.leadSourceOptions;
                return {
                    ...currItem,
                    pickListOptions: pickListOptions
                };
            });
        } else if (result.error) {
            
            console.log("error while loading records");
        }
    }

    @wire(getObjectInfo, {
        objectApiName: CONTACT_OBJECT
    }) objectInfo;     

    @wire(getPicklistValues, {
            recordTypeId: "$objectInfo.data.defaultRecordTypeId",
            fieldApiName: LEAD_SOURCE
    }) wiredPickList({ data, error }) {
        if (data) {
            this.leadSourceOptions = data;
        } else if (error) {
            console.log("error while loading data");
        }
        };
    
      

    async saveHandler(event) {
        // updateRecord or Apex Class

        // Access the draft values

        let records = event.detail.draftValues;  // array of modified records

        let updateRecordsArray = records.map((currItem) => {
            let fieldInput = {...currItem};
            return {
                fields: fieldInput
            };
        });

        this.draftValues = [];
        let updateRecordsArrayPromise = updateRecordsArray.map((currItem) =>
            updateRecord(currItem)
        );
        
        await promise.all(updateRecordsArrayPromise);

        const toastEvent = new ShowToastEvent({
            title: 'success',
            message:'Records updated successfully',
            variant: 'success',
        });
        this.dispatchEvent(toastEvent);

        await refreshApex(this.contactResultProperty);
    }
    rowActionHandler(event) {
        let action = event.detail.action;
        let row = event.detail.row;
        this.selectedRecordId = row.Id;

        this.viewMode = false;
        this.editMode = false;
        this.showModal = true;

        if (action.name === 'view') {
            this.viewMode = true;
            this.showModal = true;
        } else if (action.name === 'edit') {
            this.editMode = true;
            this.showModal = true;
        } else if (action.name === 'delete') { 
            this.deleteHandler();


        }
    }

  async deleteHandler() {
      // delete record Adapter or Apex class
      try{
          await deleteRecord(this.selectedRecordId);
      
       const event = new ShowToastEvent({
            title: 'Success',
            message:'Record deleted Successfully.',
            variant:"success"
        });
      this.dispatchEvent(event);
      await refreshApex(this.contactResultProperty);
      } catch (error) {
          const event = new ShowToastEvent({
            title: 'Error',
            message:error.body.message,
            variant:"error"
        });
      this.dispatchEvent(event);
      }
    }

   async closeModal(event){
        this.showModal = false;
        if (this.editMode) {
            await refreshApex(this.contactResultProperty);
        }
        }
}