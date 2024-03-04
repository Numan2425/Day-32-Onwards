import { LightningElement,wire,api } from 'lwc';
import searchRecords from "@salesforce/apex/CustomLookup.searchRecords"

    const DELAY=300;
export default class CustomLookup extends LightningElement {
    
    @api apiName= "Account";
    searchvalue= "";
    @api objLabel="Account";
    @api iconName = "standard:account"
    delayTimeOut;
    isLoaded= false;
    selectedIdFromTheList;

    displayOption = false;

    selectedRecord = {
        selectedId : "",
        selectedName : ""
    }
    
    @wire(searchRecords,{
        objApi : "$apiName",
        searchKey : "$searchvalue"
    }) outputs

    isSelectedRecord(){
        return this.selectedRecord.selectedId === "" ? false : true;
    }

    changeHandler(event){
        window.clearTimeout(this.delayTimeOut);
        let inputValue= event.target.value;

        this.delayTimeOut = setTimeout(() => {
            this.searchvalue = inputValue;
        }, DELAY);
        this.displayOption = true;
        console.log(delayTimeOut);
    }
    
    liHandler(event){
       let selectedid = event.currentTarget.dataset.anyitemname;
       console.log("selectedidd" , selectedid);

       let outputRecord = this.outputs.find((currentItem) => currentItem.Id == selectedid);

       this.selectedRecord = {
        selectedId : outputRecord.Id,
        selectedName : outputRecord.Name
        }
        console.log("this.selectedRecord.selectedId" , this.selectedRecord.selectedId);
        this.displayOption = false;
        this.sendSelection();

    }
    removeSelectHandler(event){
        selectedRecord = {
            selectedId : "",
            selectedName : ""
        }
        this.displayOption = false;
        this.sendSelection();
    }

    // this commented approach developer use to check the output
    // outputs({data,error}){
    //     if (data){
    //         console.log('data',data)
    //     }else if(error){
    //         console.log('error',error)
    //     }
    // }

    sendSelection(){

        let mySelectedEvent = new CustomEvent("selectedevent" , {
            detail : this.selectedRecord.selectedId
           
        })
        this.dispatchEvent(mySelectedEvent);
    }

}