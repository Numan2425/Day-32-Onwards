import { LightningElement, wire } from 'lwc';
import datatable from "@salesforce/apex/day24datatable.datatable"
const columns = [
    { label: 'ID', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Rating', fieldName: 'Rating'}
]
export default class Day24dataTablewithfunc extends LightningElement {
    columns=columns;
    accounts;
    error;

    @wire(datatable) responseHandler({data,error}){
        if (data){
            console.log( "Data => " ,data);
            let arrFromMap = data.map((currentItem)=>{
            let updatedObj = {};
                if(!currentItem.hasOwnProperty("Rating")){
                    updatedObj = {...currentItem, Rating:"Warm"};
                }else{
                    updatedObj = {...currentItem};
                } 
                return updatedObj; 
            });
            console.log("arrFromMap => " , arrFromMap);
            this.accounts = [...arrFromMap];
            this.error=null;
        }else if(error){
            console.log(error);
            this.error=error;
            this.accounts = null;
        }
        
    }

}