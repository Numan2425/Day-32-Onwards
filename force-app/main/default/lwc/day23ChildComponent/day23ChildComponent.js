import { LightningElement } from 'lwc';

export default class Day23ChildComponent extends LightningElement {

    constructor(){
        super();
        console.log('constructor from child');
    }
    connectedCallback(){
        console.log('connectedCallback from child');
    }
    renderedCallback(){
        console.log('renderedCallback from child');
    }
    disconnectedCallback(){
        console.log('Disconnecte Call Back From Child');
    }
}