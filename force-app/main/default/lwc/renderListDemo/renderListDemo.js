import { LightningElement } from 'lwc';

export default class RenderListDemo extends LightningElement {

    superstars = ["Spiderman", "superman", "Batman", "Ironman", "Hulk"];

    contactList = [
        {
            id : 1,
            firstName : "John",
            lastName : "Doe"
        },
        {
            id : 2,
            firstName : "tim",
            lastName : "cook"
        },
        {
            id : 3,
            firstName : "Elon",
            lastName : "musk"
        },
        {
            id : 4,
            firstName : "Sundar",
            lastName : "Pichai"
        }
    ]
}