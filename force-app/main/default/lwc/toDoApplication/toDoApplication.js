import { LightningElement } from 'lwc';

export default class ToDoApplication extends LightningElement {

taskname = "";
taskdate = null;
incompletetask = [];
completetask = [];

changeHandler(event){
    let{ name, value} = event.target;
    if(name === "taskname"){
        this.taskname = value;
    } else if(name === taskdate){
        this.taskdate = value;
    }
}

resetHandler(){
this.taskname = "";
this.taskdate = null;
}

addTaskHandler(){
// if task end date is missing then populatw today date as end date.

if(!this.taskate){
    this.taskdate = new Date().toDateString().slice(0, 10);
}

if(this.validateTask()){
    this.incompletetask = [
        ...this.incompletetask, {
            taskname : this.taskname,
            taskdate : this.taskdate
        }
    ];
    this.resetHandler();
    let sortedArray = this.sortTask(this.incompletetask);
    this.incompletetask =[...sortedArray];
    console.log("this.incompletetask", this.incompletetask);
}
}

validateTask(){
}

sortTask(inputArr){
  let sortedArray = inputArr.sort((a,b) => {
        const dateA = new Date(a.taskdate);
        const dateB = new Date(b.taskdate);
        return dateA - dateB;
    });

    return sortedArray;
}

// for valdateion if task name is same then show error 
validateTask(){
    let isValid = true;
    let element = this.template.querySelector(".taskname");
    
    // condition 1 -- Check if task is empty
    // condition 2 -- if task name is not empty then check for Duplicate task name
    if(!this.taskname){
        isValid = true;
} else {
    let taskname = this.incompletetask.find(
        (currItem) => 
        currItem.taskname === this.taskname && 
        currItem.taskdate === this.taskdate
        );

        if(taskItem) {
            isValid = false;
            element.setCustomValidity("Task is Already Available");
        }
}

        if(isValid){
            element.setCustomValidity("");
        }
        element.reportValidity();
        return isValid;
}

removalHandler(event){
    //from incomplete task array we have to remove the item
    let index = event.target.name;
    this.incompletetask.splice(index, 1);
    let sortedArray = this.sortTask(this.incompletetask);
    this.incompletetask =[...sortedArray];
    console.log("this.incompletetask", this.incompletetask);
}

completeTaskHandler(event){
    // remove the entry from incomplete item 
    let index = event.target.name;
    this.refreshData(index);

}

dragStartHandler(event){
    event.dataTransfer.setData("index", event.targetdataset.item);
}

allowDrop(event){
    event.preventDelfault();
}
dropElementHandler(event){
    event.dataTransfer.getData("index");
}

refreshData(index){
    let removeItem = this.incompletetask.splice(index, 1);
    let sortedArray = this.sortTask(this.incompletetask);
    this.incompletetask =[...sortedArray];
    console.log("this.incompletetask", this.incompletetask);

     // add the same entry to complete item
     this.completetask = [...this.completetask, removeItem[0]];
}
}