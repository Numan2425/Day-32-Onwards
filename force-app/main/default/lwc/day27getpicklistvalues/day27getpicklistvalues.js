import { LightningElement, wire } from 'lwc';
import Account_Object from "@salesforce/schema/Account";
import Account_industry from "@salesforce/schema/Account.Industry";
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
export default class Day27getpicklistvalues extends LightningElement {
    value;
    pickListOptions;
    AllPicklistOnAccount;

    @wire(getObjectInfo , {objectApiName : Account_Object})outputOne;

    @wire(getPicklistValues, {recordTypeId : '$outputOne.data.defaultRecordTypeId',fieldApiName : Account_industry})
     outputTwo({data,error}){
     if(data){
        this.pickListOptions = data.values;
          console.log('pickListData ',data);
       }else{
        console.log('Error From getPicklistValues ', error)
       }
   }

   @wire(getPicklistValuesByRecordType, {recordTypeId : '$outputOne.data.defaultRecordTypeId',objectApiName : Account_Object})
     outputThree({data,error}){
     if(data){
       
          this.AllPicklistOnAccount = data.picklistFieldValues.Bank_Names__c.values;

          console.log('getPicklistValuesByRecordType ',data);
       }else{
        console.log('Error From getPicklistValuesByRecordType ', error)
       }
   }
   
   handleChange(event){
    this.value = event.target.value;
    }
}
