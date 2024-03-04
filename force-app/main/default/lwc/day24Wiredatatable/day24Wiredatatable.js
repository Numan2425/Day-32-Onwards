import { LightningElement, wire } from 'lwc';
import data from "@salesforce/apex/day24datatable.datatable";
import searchRecords from "@salesforce/apex/CustomLookup.searchRecords"

const columns = [
    { label: 'ID', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name', editable : true },
    { label: 'Rating', fieldName: 'Rating' }
]

export default class Day24Wiredatatable extends LightningElement {

    apiName= "Account";
    searchvalue= "";
    columns=columns;
    approval = false;
    @wire(searchRecords,{
        objApi : "$apiName",
        searchKey : "$searchvalue"
    }) outputs

    changeHandler(event){
        this.approval = true;
        window.clearTimeout(this.delayTimeOut);
        let inputValue= event.target.value;

        this.delayTimeOut = setTimeout(() => {
            this.searchvalue = inputValue;
            if(inputValue==""){
                this.approval = false;
            }
        }, 300);
        console.log(delayTimeOut);
        
    }

}