import { LightningElement } from 'lwc';

export default class GenerateMessage extends LightningElement {

    firstName = '';
    lastName = '';
    changeHandler(event) {
        let { name, value } = event.target;

        if (name === "fname") {
            this.firstName = value;
        } else if (name === "lname") {
            this.lastName = value;
        }
    }

    handleClick() {
        let fullName = `${this.firstName} ${this.lastName}`.toUpperCase();
       
        // child to parent communication
        //1st create custom Event
        let myCustomEvent = new CustomEvent("message", {
            detail: {
                fullName: fullName
            }
        });
        //2nd step dispatch event
            this.dispatchEvent(myCustomEvent);

    }
    }
