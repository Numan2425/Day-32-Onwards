import { LightningElement, wire } from 'lwc';
import Account_Obj from '@salesforce/schema/Account';
import Account_Industry from '@salesforce/schema/Account.Industry';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import {NavigationMixin} from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class ContactFilter extends  NavigationMixin(LightningElement) {

    selectedAccountId;
    isDisabled = false;
    selectedIndustry;
    @wire(getObjectInfo, {
        objectApiName : Account_Obj
    })accountInfo;

    @wire(getPicklistValues,{
        recordTypeId: "$accountInfo.data.defaultRecordTypeId",
        fieldApiName : Account_Industry
    })industryPicklist;



    
    selectedRecordHandler(event){
      this.selectedAccountId = event.detail;
      console.log("event.detail", event.detail);
      if(this.selectedAccountId){
        this.isDisabled = false
      }else{
        this.isDisabled = true
      }
    }

    handleChange(event){
      this.selectedIndustry =  event.target.value;
    }

    createNewContact(){

        let defaultValue = encodeDefaultFieldValues({
            AccountId : this.selectedAccountId
        })
        let pageRef = {
            type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Contact',
            actionName: 'new'
        },
        state: {
            defaultFieldValues: defaultValue
    }
    }
    this[NavigationMixin.Navigate](pageRef);
}


}