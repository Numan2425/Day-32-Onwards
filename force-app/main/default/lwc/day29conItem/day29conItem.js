import { LightningElement, api } from 'lwc';

export default class Day29conItem extends LightningElement {
    @api contactt;

    CaptureCurrentContactIdOnChild(event){
        event.preventDefault();

        const currentEvent = new CustomEvent("currentcontactevent" , {
            detail : this.contactt.Id
        });

        this.dispatchEvent(currentEvent);
    }
}