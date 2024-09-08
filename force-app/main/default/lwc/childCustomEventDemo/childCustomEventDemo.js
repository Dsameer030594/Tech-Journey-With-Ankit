import { LightningElement } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {

  clickHandler() {
  
    // creation of custom Event
    const myCustomEvent = new CustomEvent("displaymsg");

    // Dispatches the custom event
    this.dispatchEvent(myCustomEvent);
}
}