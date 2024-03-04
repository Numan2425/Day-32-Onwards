import { LightningElement,wire } from 'lwc';
import conlist from '@salesforce/apex/dayLwcConList.conlist';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';

export default class Day29ConList extends LightningElement {
    selectedCon;
@wire(conlist)contacts;
@wire(MessageContext)
    messageContext;

HandlerContactIdRecieved(event){
 let selectedConId = event.detail;

 this.selectedCon = this.contacts.data.find((currentItem)=>currentItem.Id === selectedConId);
 console.log("selectedCon" , this.selectedCon);

        const payload = { lmsData: this.selectedCon };

        publish(this.messageContext, recordSelected, payload);

        console.log("payload" , payload);
}



}