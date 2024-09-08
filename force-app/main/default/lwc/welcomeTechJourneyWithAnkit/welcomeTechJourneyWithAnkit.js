import { LightningElement, track } from 'lwc';

export default class WelcomeTechJourneyWithAnkit extends LightningElement {

    greeting = 'Hello';
    @ track Welcome = 'Tech Journey with Ankit';

    clickHandler(event){
        this.greeting = 'Namaste';
        this.Welcome = 'Today is Day 19 of LWC Bootcamp';
    }
}