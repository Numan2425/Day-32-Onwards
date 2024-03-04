import { LightningElement , wire} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account_Object from '@salesforce/schema/Account';

export default class Day27getObjectInfo extends LightningElement {

    objData;

    @wire(getObjectInfo, {objectApiName : Account_Object})
    outputs({data,error}){
        if(data){
            this.objData = data.childRelationships;
            console.log('getObjectInfooo' ,this.objData);
            console.log('getObjectInfooodata', data);

        }
    }
}