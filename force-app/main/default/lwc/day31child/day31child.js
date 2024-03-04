import { LightningElement } from 'lwc';

export default class Day31child extends LightningElement {
    handleClickChild(){
        let childEvent = new CustomEvent("childeve",{
            // bubbles:false,   // not letting the event go into dom
            // composed:false    // not letting the event go into shadown boundary

            bubbles:true,     // letting the event go into dom
            composed:true        // not letting the event go into shadown boundary
        })
        this.dispatchEvent(childEvent);
    }
}