import { LightningElement } from 'lwc';

export default class Day23ParentComponent extends LightningElement {
    ifShow;
    constructor(){
        super();
        console.log('constructor from parent');
    }
    connectedCallback(){
        console.log('connectedCallback from parent');
    }
    renderedCallback(){
        console.log('renderedCallback from parent');
    }
    disconnectedCallback(){
        console.log('Disconnecte Call Back From Parent');
    }

    onChangeHandler(event){
        this.ifShow = event.target.checked
    }
}