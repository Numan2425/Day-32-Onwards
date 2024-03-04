import { LightningElement } from 'lwc';

export default class Day29ChildComponent extends LightningElement {

    handleClickOnChild(){
        const selectedEvent = new CustomEvent("childeventtoshowmessage");
        this.dispatchEvent(selectedEvent);
    }
    

}