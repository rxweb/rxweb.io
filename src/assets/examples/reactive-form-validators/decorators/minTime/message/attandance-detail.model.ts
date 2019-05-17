import {  minTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@minTime({message:'You can enter only time format data greater than config value'  ,value:'07:00' }) 
	exitTime: string;
	
	
}
