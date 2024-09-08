import { LightningElement } from 'lwc';

export default class DynamiccssQuerySelector extends LightningElement {

    pColor = "choclate-color";

    addCSSHandler(event){
        let element = this.template.querySelector("p");
        element.classList.add("green-color");
    }

    removeCSSHandler(event){
        let element = this.template.querySelector("p");
        element.classList.remove("green-color");
    }

    toggleCSSHandler(event){
        let element = this.template.querySelector("p");
        element.classList.toggle("green-color");
    }
}