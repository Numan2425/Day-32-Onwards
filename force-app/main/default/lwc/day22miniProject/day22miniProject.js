import { LightningElement } from 'lwc';

export default class Day22miniProject extends LightningElement {
    taskName="";
    taskDate=null; //null is object and date is also obj so we are intializing with null
    inCompleteTaskArr=[];
    completedTaskArr=[];
    tInputChange(event){
        let {name,value} = event.target; // destructuring it will assign name and value of html attribue to js name,value
        if(name=="tname"){
            this.taskName = value;
        }else if(name=="tdate"){
            this.taskDate = value;
        }
    }

    resethandleClick(){
        this.taskName="";
        this.taskDate=null;
    }

    addTaskhandleClick(){
        // now lets populate late date as today date if user have not entered any date or if date is falsy
        if(!this.taskDate){
            this.taskDate = new Date().toISOString().slice(0,10);
        }
        if(this.isvalidfunc()){
            this.inCompleteTaskArr = [...this.inCompleteTaskArr,{
                taskName : this.taskName,
                taskDate : this.taskDate
            }]
        }
        this.resethandleClick();
        let sorteddArr = this.sortArr(this.inCompleteTaskArr);
       // console.log('sorteddArr',JSON.stringify(sorteddArr));
        this.inCompleteTaskArr=[...sorteddArr]; //this is call override of an array
        console.log("this.inCompleteTaskArr",JSON.stringify(this.inCompleteTaskArr));
        }

    isvalidfunc(){
        let isValid = true;

        let element = this.template.querySelector(".selectMeForDuplicateErr")

        if(!this.taskName){
            isValid = false;
        }else{
            let taskAvaiable = this.inCompleteTaskArr.find((currItem)=>
            currItem.taskName===this.taskName && currItem.taskDate===this.taskDate
            )
            if(taskAvaiable){
                isValid = false;
                element.setCustomValidity("Some Duplicate Entry"); // This Is Important to set validity err
            }
        }
        if(isValid==true){
            element.setCustomValidity("");
        }
        element.reportValidity(); //This Is very Important to show validity err on UI
        return isValid;
    }

    sortArr(inputArr){
        let sortedArr=inputArr.sort((a,b)=>{
            let dateA = new Date(a.taskDate);
            let dateB = new Date(b.taskDate);
            return dateA-dateB;
        });
        return sortedArr;
    }

    delhandler(event){
        let index = event.target.name;
        this.inCompleteTaskArr.splice(index,1); // from this index on entry will be deleted 
        let sorteddd=this.sortArr(this.inCompleteTaskArr); //Again we are sorting out list
        this.inCompleteTaskArr=[...sorteddd]; // over loading again
        console.log("this.inCompleteTaskArr",JSON.stringify(this.inCompleteTaskArr));
    }
    checkhandler(event){
        let index = event.target.name;
        let arrReturnedBySpliceRemovedEntries = this.inCompleteTaskArr.splice(index,1);
        let sorteddd=this.sortArr(this.inCompleteTaskArr);
        this.inCompleteTaskArr=[...sorteddd];
        console.log("this.inCompleteTaskArr",JSON.stringify(this.inCompleteTaskArr));
        this.completedTaskArr = [...this.completedTaskArr,arrReturnedBySpliceRemovedEntries[0]] // as we want to add only one item into completed so index[0]
    }
}
