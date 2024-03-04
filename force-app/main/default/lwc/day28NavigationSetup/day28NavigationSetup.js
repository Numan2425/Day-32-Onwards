import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';


export default class Day28NavigationSetup extends NavigationMixin(LightningElement) {
    handleClick1(){
        // Direct to the app home page
let pageRef ={
    type: 'standard__namedPage',
    attributes: {
        pageName: 'home'
    }
}
this[NavigationMixin.Navigate](pageRef);

    }

    handleClick2(){

           // Navigates to account list with the filter set to Recent.

    let pageRef2 =  {
        type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'list'
    },
    state: {
        filterName: 'Energy_and_Biotech_Accounts'
  }
}

this[NavigationMixin.Navigate](pageRef2);
    }

    handleClick3(){
        // Navigates to a new account page without default field values:
  let pageRef3 = {

    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'new'
    },
  } 
  this[NavigationMixin.Navigate](pageRef3);
    }

    handleClick4(){

      const  valuesToPopulate = encodeDefaultFieldValues({
            Rating : "Hot",
            Industry : "Energy"
        });

        let pageRef4 = 
        {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : valuesToPopulate
            }
        };
        this[NavigationMixin.Navigate](pageRef4);
    }

    handleClick5(){
 // Editing a record
        let pageRef5 = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00001Xctj5AAB',
                objectApiName: 'Account',
                actionName: 'edit'
            }
    }
    this[NavigationMixin.Navigate](pageRef5);
    }
   
   
}


