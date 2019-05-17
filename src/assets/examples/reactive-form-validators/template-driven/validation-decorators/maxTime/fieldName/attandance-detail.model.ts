import {  maxTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	closingTime: string;

	@maxTime({message:'You can enter only time format data'  ,fieldName:'closingTime' }) 
	exitTime: string;
	
	
}
