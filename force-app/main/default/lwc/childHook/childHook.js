import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
        
    constructor(){
        super();
        console.log("Constructor from Child");
    }
    connectedCallback(){
        console.log("connectedCallback from Child");
    }

    renderedCallback(){
        console.log("renderedCallBack from Child");
    }
     errorCallback(error, stack){
        console.log("errorCallBack from Child");
        console.log("error", error);
        console.log("stack", stack);
     }

     disconnectedCallback(){
             console.log("disconnectedCallback from Child");
          }

          
}