import { LightningElement, api} from 'lwc';

export default class ChildComponent extends LightningElement {

    @api display;  // smallCase
    @api displayGreeting;  //camelCase

    @api user;
    @api isUserAvailable = false;  // boolean
}