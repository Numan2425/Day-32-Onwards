import { LightningElement } from 'lwc';

export default class Day20calculator extends LightningElement {
    numberOne="";
    numberTwo="";
    result;
    displayOutput=false;

    inputfuncNo1(event){
        this.numberOne= event.target.value;
    }
    inputfuncNo2(event){
        this.numberTwo= event.target.value;
    }
    /*
        addFunc(){
        this.result= parseInt(this.numberOne) + parseInt(this.numberTwo);
    }
    minusFunc(){
        this.result= this.numberOne - this.numberTwo;
    }
    multiplyFunc(){
        this.result= this.numberOne * this.numberTwo;
    }
    divideFunc(){
        this.result= this.numberOne / this.numberTwo;
    }
    */
    calculation(event){
        let labelValue = event.target.label;
        if(labelValue=="Add"){
            this.displayOutput=true;
            this.result= parseInt(this.numberOne) + parseInt(this.numberTwo);
        }else if(labelValue=="Minus"){
            this.displayOutput=true;
            this.result= parseInt(this.numberOne) - parseInt(this.numberTwo);
        }else if(labelValue=="Multi"){
            this.displayOutput=true;
            this.result= parseInt(this.numberOne) * parseInt(this.numberTwo);
        }else{
            this.displayOutput=true;
            this.result= parseInt(this.numberOne) / parseInt(this.numberTwo);
        }
    this.numberOne="";
    this.numberTwo="";
    }
    
}