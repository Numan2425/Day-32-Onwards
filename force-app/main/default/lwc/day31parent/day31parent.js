import { LightningElement } from 'lwc';

export default class Day31parent extends LightningElement {
    eventHandledAtChildDiv(){
        console.log("This Event is being handled in parent at Chlid's div ")
    }
    eventHandledAtChildLevel(){
        console.log("This Event is being handled in parent at Chlid's Level ")
    }
}