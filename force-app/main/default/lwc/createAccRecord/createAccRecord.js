import { LightningElement } from 'lwc';
import CreateAccRec from '@salesforce/apex/CreateAccRecordClass.CreateAccRec';

export default class CreateAccRecord extends LightningElement {
    AccountNameFromHtmlToJS;
    AccountNoFromHtmlToJS;
    AccountRevenueFromHtmlToJS;

    changeHandler(event){
        if(event.target.name == 'accName'){
            this.AccountNameFromHtmlToJS = event.target.value;
        }else if(event.target.name == 'accNo'){
            this.AccountNoFromHtmlToJS=event.target.value;
        }else if(event.target.name == 'accRev'){
            this.AccountRevenueFromHtmlToJS = event.target.value;
        }
    }
    createHandler(){
        CreateAccRec({ name : this.AccountNameFromHtmlToJS, no: this.AccountNoFromHtmlToJS, rev :this.AccountRevenueFromHtmlToJS })
            .then(result => {
                
                console.log('result ', result);
            })
            .catch(error => {
                console.error('Error calling Apex method: ', error);
            });
    }
}