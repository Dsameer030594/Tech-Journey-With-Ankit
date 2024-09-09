import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
export default class DialogBoxDemo extends LightningElement {

    async alertHandler() {
        // first go and import alert from document
        // as alert and  confirm are async method. //Prompt is not async method
        //so use async and await
        await LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error', // a red theme intended for error states
            label: 'Error!', // this is the header text
        });
    }   
   async confirmHandler() {
const result = await LightningConfirm.open({
            message: 'this is the Confirm message',
            variant: 'header',
            label: 'Are you shure',
            theme: "success"
            // setting theme would have no effect
        });
        console.log("result", result);
        // if result is true, then the user clicked OK
        // if result is false, then the user clicked cancel
        //Confirm has been closed
        //result is true if OK was clicked
        //and false if cancel was clicked
    }
    
    promptHandler() {
        LightningPrompt.open({
            message: 'Enter your Favourate Channel',
            theme: "yellow",
            label: 'Please Respond', // this is the header text
            defaultValue: 'Tech journey with Ankit', //this is optional
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
        });
    }
}