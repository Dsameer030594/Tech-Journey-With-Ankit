import { LightningElement, wire} from 'lwc';
import getAccountList from "@salesforce/apex/AccountHelper.getAccountList";

const columns = [
    { label: 'Account Id', fieldName: 'Id' },
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Account Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Account Rating', fieldName: 'Rating', type: 'picklist' },
    { label: 'Account Industry', fieldName: 'Industry', type: 'picklist' },
];


export default class WireDecoratorProperty extends LightningElement {
 
@wire (getAccountList) accounts;

    data = [];
    columns = columns;
// accounts.data   data will goes to accounts.data
// accounts.error  error will goes to accounts.error

     
} 