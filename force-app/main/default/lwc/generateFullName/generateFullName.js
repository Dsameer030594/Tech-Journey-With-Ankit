import { LightningElement } from 'lwc';

export default class GenerateFullName extends LightningElement {

    firstName = "";
    lastName = "";
    fullName  = "";

    changeHandlerfirstName(event){
        this.firstName = event.target.value;
    }

    changeHandlerlastName(event){
        this.lastName = event.target.value;
    }
    handleClick(event){
        this.fullName = this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
    }
    
}