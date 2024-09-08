import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {

    firechildhandler() {
        Console.log('Event handled in Parent Component - at Child Level');   
    }

    fireChildDivHandler() {
        Console.log('Event handled in Parent Component - at Div Level');   
    }
}