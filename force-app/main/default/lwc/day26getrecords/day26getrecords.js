import { LightningElement, wire } from 'lwc';

import Account_Name_Field from '@salesforce/schema/Account.Name';
import Contact_Name_Field from '@salesforce/schema/Contact.Name';
import { getRecords } from 'lightning/uiRecordApi';
export default class Day26getrecords extends LightningElement {

    output;
    @wire(getRecords ,{
        records : [{
            recordIds : ['0015j00001TSABzAAP','0015j00001Xctc3AAB'],
            fields : [Account_Name_Field]
        },
        {
            recordIds : ['0035j00001KVBBIAA5','0035j00001KVFqOAAX'],
            fields : [Contact_Name_Field]
        }
    ]
    })outputs({data,error}){
        if (data){
            this.output = data;
            console.log('outputt' ,this.output);
        }
    }
}