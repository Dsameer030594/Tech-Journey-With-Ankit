import { LightningElement, track } from 'lwc';

export default class NestedObjectPrivateProperty extends LightningElement {

   @track myDetails = {
        fname : 'Sameer',
        lname : 'Daronde'
    }

  @track myTask = ["Office", "Meeting", "Bootcasmp"];
    clickHandler(event){
        this.myDetails.fname = 'Ankit';
        this.myDetails.lname = 'Sharma';
    }

    addTaskHandler(event){
        this.myTask.push("Self Study");
    }

    refreshHandler(event){
        this.myDetails = {fname:'Ankit',lname:'Sharma'};
        this.myTask = [...this.myTask , "Self Study"];
    }
}