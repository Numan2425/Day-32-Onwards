import { LightningElement } from 'lwc';

export default class Day31grand extends LightningElement {

    childEventBeingRecievedAtGrand(){
        console.log("This Event is being handled in grand at Chlid's level ")
    }
}