import { LightningElement, api, wire } from 'lwc';
import searchRecords from '@salesforce/apex/customLookupController.searchRecords';
const DELAY = 300;
export default class CustomLookup extends LightningElement {

    
   @api apiName = "Account";
    searchValue = "A";
   @api objectLabel = "Account";
   @api iconName = "standard:account";
    delayTimeout;
    selectedRecord = {
        selectedId: "",
        selectedName : ""
    }

    @wire(searchRecords,
        {
            objectApiName: "$apiName",
            searchKey: "$searchValue"
        }
    )
    outputs;

    changeHandler(event) {
        let enterValue = event.target.value;
       this.delayTimeout = setTimeout(() => {
            this.searchValue = enterValue;
        }, DELAY);
    }

    get isRecordSelected() {
        return this.selectedRecord.selectedId === " " ? false : true;
    }
    clickHandler(event) {
        let selectedId = event.currentTarget.dataset.item;
        console.log(selectedId);
        let outputRecord = this.outputs.data.find(
            (currItem) => currItem.Id === selectedId);

        this.selectedRecord = {
            selectedId: outputRecord.Id,
            selectedName : outputRecord.Name
        }
        this.sendSelection();
        this.displayOptions = false;
    }

    removalSelectionHandler(event) {
        this.selectedRecord = {
            selectedId: "",
            selectedName: ""
        };
        this.sendSelection();
        this.displayOptions = false;
    }
    sendSelection() {
        let mySelectionEvent = new CustomEvent("selectedrec", {
            detail: this.selectedRecord.selectedId,
        });
        this.dispatchEvent(mySelectionEvent);
    }
}