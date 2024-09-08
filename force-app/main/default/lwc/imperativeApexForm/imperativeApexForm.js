import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TICKER from '@salesforce/schema/Account.TickerSymbol';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import updateTickerRecord from '@salesforce/apex/AccountHelper.updateTickerRecord';

import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';

export default class ImperativeApexForm extends LightningElement {
    // To access Record Id
    @api recordId;
    accname;
    accticker;

    // Wire adapter to fetch the record data
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME, ACCOUNT_TICKER] })
    wiredRecord({ error, data }) {
        if (data) {
            this.accname = getFieldValue(data, ACCOUNT_NAME);
            this.accticker = getFieldValue(data, ACCOUNT_TICKER);
           
        } else if (error) {
            console.error('Error fetching record', error);
        }
    }

    // Handler to update ticker symbol value
    changeHandler(event) {
        this.accticker = event.target.value;
    }

    // Method to call Apex method for updating ticker symbol
    updateTicker() {
        updateTickerRecord({
            recordId: this.recordId,
            newTicker: this.accticker
        })
        .then(result => {
            console.log('Ticker updated', result);
             notifyRecordUpdateAvailable([{recordId: this.recordId}]);
        })
        .catch(error => {
            console.error('Error in updating ticker', error);
        });
    }
}
