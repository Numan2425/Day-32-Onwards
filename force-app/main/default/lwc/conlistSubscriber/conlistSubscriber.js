import { LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';
export default class ConlistSubscriber extends LightningElement {

    @wire(MessageContext)
    messageContext;
    selectedCon;

    subscription = null;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                recordSelected,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleMessage(message) {
        this.selectedCon = message.lmsData;
        console.log("this.selectedCon", this.selectedCon);
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

}