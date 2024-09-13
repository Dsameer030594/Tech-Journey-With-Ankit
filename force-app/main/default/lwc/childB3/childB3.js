import { LightningElement, api } from 'lwc';

export default class ChildB3 extends LightningElement {

    @api messageFromA;

    // This property will be updated when parent 
    //passes new data
}