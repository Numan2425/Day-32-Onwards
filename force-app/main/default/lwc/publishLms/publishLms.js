import { LightningElement,wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendMessage__c';

export default class PublishLms extends LightningElement {

    @wire(MessageContext)
    messageContext;

    publishMessage(){
        const payload = { LmsData: 'Welcome to the bootcamp' };

        publish(this.messageContext, recordSelected, payload);
    }
}