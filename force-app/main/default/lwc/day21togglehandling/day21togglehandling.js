import { LightningElement } from 'lwc';

export default class Day21togglehandling extends LightningElement {
    displayMsg = false;
    changefunc(event){
        this.displayMsg = !this.displayMsg;
    }
}