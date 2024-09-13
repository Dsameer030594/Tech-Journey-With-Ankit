import { LightningElement } from 'lwc';

export default class Parent2 extends LightningElement {

    // If there are 3 components child A and Child B
    // and they share the same parent how can we 
    //communicate from both child to Parent 
    //in the LWC
    
    messageFromChildA2;
     messageFromChildB2;


    receiveMessageFromChildA2(event) {
        this.messageFromChildA2 = event.detail;
    }

    receiveMessageFromChildB2(event) {
        this.messageFromChildB2 = event.detail;
    }


}