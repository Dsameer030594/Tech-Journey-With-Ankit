import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

    numberone= "";
    numbertwo= "";
    result = 0;

    displayOutput = false;
     changeHandler(event){
    //     // this.numberone = event.target.value;
    //     // console.log(this.numberone);


       let name = event.target.name;
      let value = event.target.value;

     if(name === "number1"){
         this.numberone = value;
     } else if(name === "number2"){
         this.numbertwo = value;
     }
}

     calculateInput(event){

        this.displayOutput = true;
        let labelelement = event.target.label;
        if(labelelement === "Add"){
            this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
        } else if(labelelement === "sub"){
            this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
        } else if(labelelement === "mult"){
            this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
        } else if(labelelement === "div"){
            this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
        }
     
      // reset
        this.numberone = "";
        this.numbertwo = "";
    }

     
     
    // changeHandlernumbertwo(event){
    //     this.numbertwo = event.target.value;
    //     console.log(this.numbertwo);
    // }
    // addHandler(event){
    //     this.result = parseInt(this.numberone) + parseInt(this.numbertwo)
    // }
    // subHandler(event){
    //     this.result = parseInt(this.numberone) - parseInt(this.numbertwo)
    // }

    // multHandler(event){
    //     this.result = parseInt(this.numberone) * parseInt(this.numbertwo)
    // }

    // divHandler(event){
    //     this.result = parseInt(this.numberone) / parseInt(this.numbertwo)
    // }

}