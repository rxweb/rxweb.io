import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({value:'23:30' }) 
	closingTime: string;
	
	
	@maxTime({message:'You can enter only time format data'  ,fieldName:'closingTime' }) 
	exitTime: string;
	
	
}
