import { LightningElement,api } from 'lwc';
import AccountName from '@salesforce/schema/Account.Name';
import AccountIndustry from '@salesforce/schema/Account.Industry';
import AccountAR from '@salesforce/schema/Account.AnnualRevenue';

export default class Day32RecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;
    fields = [AccountName,AccountIndustry,AccountAR];
}