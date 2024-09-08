import { LightningElement, wire } from 'lwc';
import getAccountList from "@salesforce/apex/AccountHelper.getAccountList"

const columns = [
    { label: 'Account Id', fieldName: 'Id' },
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Account Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Account Rating', fieldName: 'Rating', type: 'picklist' },
    { label: 'Account Industry', fieldName: 'Industry', type: 'picklist' },
];

export default class WireDecoratorWithFunction extends LightningElement {

    data = [];
    columns = columns;
    accounts;
    error;
    @wire (getAccountList) accountFunction({data, error}){

        if(data){
            console.log("data", data);
           let updatedAccounts = data.map((currItem) => {
                let updatedObject = {};
                if(!currItem.hasOwnProperty("Rating")){
                    updatedObject = {
                       ...currItem, Rating : "Warm"
                    };
                } else{
                    updatedObject = {...currItem};
                }
                return updatedObject;
            });

            console.log("updatedAccounts", updatedAccounts);
            this.accounts = [...updatedAccounts];
            this.error = null;
       
        }else if(error){
            console.log("error", error);
            this.accounts = null;
            this.error = error;
        }
    }
}