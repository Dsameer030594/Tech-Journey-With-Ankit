import { LightningElement, wire } from 'lwc';
import getContactListForDatatable from '@salesforce/apex/ContactsController.getContactListForDatatable'

const columns = [
    {
        label: 'Name', type: "customName", typeAttributes: {
            contactName: {fieldName: "Name"}
    } },
    
    {
        label: 'Account Name',
        fieldName: 'accountLink',
        type: "url",
        typeAttributes: {
            label: {
                fieldName: "accountName"
            },
            target: "_blank"
        }
    },
    
    {
        label: 'Title', fieldName: 'Title', cellAttributes: {
            class: {
                fieldName: "titleColor"
            }   
        }
    },
    
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Email', fieldName: 'Email', type: 'email' },
   
    {
        label: 'Rank',
        fieldName: 'Rank__c',
        type: 'customRank',
        typeAttributes: {
            RRankIcon: {
                fieldName: "rankIcon"
            }
        }
    },
    {
        label: 'Picture', type: 'customImage',
        typeAttributes: {
            pictureUrl: {fieldName: "Picture__c"}
        },
        cellAttributes: {
            alignment: "center"
        }
    },
];


export default class CustomStyleDataTable extends LightningElement {

    contacts;
     columns = columns;

    @wire(getContactListForDatatable) 
    wiredContact({ data, error }) {
        if (data) {
            // this.contacts = data;
           this.contacts = data.map((record) => {
                let accountLink = "/" + record.AccountId;
               let accountName = record.Account.Name;
               let titleColor = "slds-text-color_success";
               let rankIcon = record.Rank__c > 5 ? "utility:ribbon" : "";

                return {
                    ...record,
                    accountLink: accountLink,
                    accountName: accountName,
                    titleColor: titleColor,
                     rankIcon: rankIcon
                }
            })
            console.log(data);
        } else {
            console.log(error)
        }
    }

}