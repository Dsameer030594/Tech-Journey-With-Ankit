import { getObjectInfos } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account';
import CONTACT_NAME from '@salesforce/schema/Contact';
export default class GetObjectInfosDemo extends LightningElement {

    objectData;
    objectError;
    @wire(getObjectInfos, {
        objectApiNames: [ACCOUNT_NAME, CONTACT_NAME]
    })
    outputFunction({ data, error }) {
        if (data) {
            this.objectData = data;
            this.objectError = null;
        } else if (error) {
            this.objectError = error;
            this.objectData = null;
        }
    }
}