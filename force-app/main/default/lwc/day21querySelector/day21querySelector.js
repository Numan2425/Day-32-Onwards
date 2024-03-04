import { LightningElement } from 'lwc';

export default class Day21querySelector extends LightningElement {
    PropertyNameFromJS = "redcolorBG";

    addCss(){
        let element = this.template.querySelector("p");
        element.classList.add("blackBDR")
    }

    removeCss(){
        let element = this.template.querySelector("p");
        element.classList.remove("blackBDR")
    }

    toggleCss(){
        let element = this.template.querySelector("p");
        element.classList.toggle("blackBDR")
    }
}