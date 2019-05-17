import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({value:'23:30' }) 
	closingTime: string;
	
	
}
