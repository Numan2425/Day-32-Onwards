import { LightningElement, api } from "lwc";
export default class ShowingRecordName extends LightningElement {
	@api recordId;
	@api objectApiName;
}