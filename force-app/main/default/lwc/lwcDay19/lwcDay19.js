import { LightningElement, track } from 'lwc';

export default class LwcDay19 extends LightningElement {
    name = 'Numan';
    @track greeting = 'Hope you are doing great';
    changetextfunc(event){
        this.name = 'Ali';
        this.greeting = 'How Was Your day';
    }
}