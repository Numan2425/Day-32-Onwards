import { LightningElement, wire } from 'lwc';
import methodOne from '@salesforce/apex/gettingParentAcc.methodOne';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import AccountObject from '@salesforce/schema/Account';
import AccountRating from '@salesforce/schema/Account.Rating';

export default class AccountDetails extends LightningElement {

    parentOptions = [];
    selectedParentAcc="";
    selectedAcc = "";
    slaExpDate = null;
    rating="";
    noOfLoc;
    description;
   @wire(methodOne)parentAcc({data,error}){
    if(data){
        this.parentOptions = [];
        this.parentOptions = data.map((currItem)=> ({
            label : currItem.Name,
            value : currItem.Id
        }));
    }else if(error){
        console.log("error", error);
    }
   }
   @wire(getObjectInfo,{
    objectApiName : AccountObject
   })objectInfo;
   @wire(getPicklistValues,{
    recordTypeId : "$objectInfo.data.defaultRecordTypeId",
    fieldApiName : AccountRating
   })accountInfoPicklist;

   handleChange(event){
    let {name , value} = event.target;

    if(name == "parent"){
        this.selectedParentAcc = value;
    }
    if(name == "accname"){
        this.selectedAcc = value;
    }
    if(name == "slaExpDate"){
        this.slaExpDate = value;
    }
    if(name == "rating"){
        this.rating = value;
    }
    if(name == "noofloc"){
        this.noOfLoc = value;
    }
    if(name == "description"){
        this.description = value;
    }
   }

   saveRecordHandler(){

   }

}