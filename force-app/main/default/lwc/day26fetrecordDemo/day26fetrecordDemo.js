import { LightningElement,wire,api } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Revenue from '@salesforce/schema/Account.AnnualRevenue';
import  {getFieldValue, getRecord} from 'lightning/uiRecordApi';

export default class Day26fetrecordDemo extends LightningElement {
    @api recordId;
    acName;
    acRevenue;
    @wire(getRecord,
        {recordId : "$recordId",
         fields : [Account_Name,Account_Revenue]
        })output({data,error}){
            if(data){
                console.log(data);
           // this.acName = data.fields.Name.value; // data.fields.Name.value; this is manual traversing to avoid this we can use getFieldValue
            this.acName = getFieldValue(data, Account_Name);
           // this.acRevenue = data.fields.AnnualRevenue.value;
           this.acRevenue = getFieldValue(data, Account_Revenue);
            }
             
        }
}