import { LightningElement } from 'lwc';

export default class Day29ParentComponent extends LightningElement {
    displayMessage = false;
    handleOnParent(){
        this.displayMessage = true;
    }
}