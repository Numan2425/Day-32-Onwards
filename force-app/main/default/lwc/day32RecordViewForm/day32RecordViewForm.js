import { LightningElement, api } from 'lwc';
import AccountName from '@salesforce/schema/Account.Name';
import AccountIndustry from '@salesforce/schema/Account.Industry';
import AccountAR from '@salesforce/schema/Account.AnnualRevenue';
import AccountRating from '@salesforce/schema/Account.Rating';

export default class Day32RecordViewForm extends LightningElement {
   @api recordId;
   @api objectApiName;
    fields={
        Name:  AccountName,
        Industry : AccountIndustry,
        Revenue : AccountAR,
        Rating : AccountRating
    }
}