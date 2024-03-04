import { LightningElement, track } from 'lwc';

export default class Day19trakforobj extends LightningElement {

    @track details = {
        fname :'Numan',
        lname : 'Ahmad'
    }
    namechangefunc(event){
        this.details.fname= 'Ali';
        this.details.lname= 'Raza';
    }
}