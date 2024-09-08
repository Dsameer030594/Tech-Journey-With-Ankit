import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {

    fireChildHandler() {
        Console.log('Event handled in Grand Parent Component - at Child Level');   
    }
}