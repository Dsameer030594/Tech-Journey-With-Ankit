 import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getObjectInfos } from 'lightning/uiObjectInfoApi';
export default class GetMultipleObjectInfosDemo extends LightningElement {


    objectInfo;
    objectError;
    @wire(getObjectInfos, {
        objectApiNames : [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
    })
    outputFunction({data, error}){
        if(data){
            console.log("data", data);
            this.objectInfo = data;
            this.objectError = null;
        } else if(error){
            console.log("error", error);
            this.objectInfo = null;
            this.objectError = error;
        }
    }
}