import { LightningElement,api } from 'lwc';
import AccountName from '@salesforce/schema/Account.Name';
import AccountIndustry from '@salesforce/schema/Account.Industry';
import AccountAR from '@salesforce/schema/Account.AnnualRevenue';
import AccountRating from '@salesforce/schema/Account.Rating';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class Day33RecordEditForm extends NavigationMixin( LightningElement) {
    @api recordId;
    @api objectApiName;

    fields = {
        Name : AccountName,
        Industry : AccountIndustry,
        Revenue : AccountAR,
        Rating : AccountRating

    }

    successHandler(event){

     let pageRef =   {
            type: "standard__recordPage",
            attributes: {
                recordId: event.detail.id,
                objectApiName: this.objectApiName,
                actionName: "view"
            }
    };
    this[NavigationMixin.Navigate](pageRef);
    }

    errorHandler(event){
        const cusevent = new ShowToastEvent({
            title: 'Get Help',
            message: event.detail.message,
            variant : "error"
            
        });
        this.dispatchEvent(cusevent);
    }
}