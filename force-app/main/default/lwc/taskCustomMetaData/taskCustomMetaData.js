import { LightningElement } from 'lwc';
import customMetadataForLwc from "@salesforce/apex/customMetadataForLwc.customMetadataForLwc"
export default class TaskCustomMetaData extends LightningElement {

    valueFromApex;

    clickHandler(){
        customMetadataForLwc()
        .then(result => {
            this.valueFromApex = result;
            console.log(result);
        })
        .catch(error =>{

        })
    }

}