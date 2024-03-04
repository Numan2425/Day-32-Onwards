import { LightningElement, api } from 'lwc';

export default class Day20ChildComponent extends LightningElement {
    @api display;
    @api camelCase;
    @api user;
    @api boolieanVariable = false;
}