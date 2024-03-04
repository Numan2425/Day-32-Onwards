import { LightningElement,wire } from 'lwc';
import DataTablee from '@salesforce/apex/dataForLwc.accdata'

const columns = [
    { label: '#AccountID' , fieldName:'Id'},
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry', type: 'text' },
    { label: 'Rating', fieldName: 'Rating', type: 'text' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
];
export default class DataTable extends LightningElement {
    data = [];
    columns = columns;


    connectedCallback()
     {
      // console.log('in connected');
       //console.log('response=>',response); 
         DataTablee().then(response => {
            const data = response;
            this.data = data;
        });
         
      
    }
}