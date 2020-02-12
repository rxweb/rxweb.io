import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({operator:'<'  ,value:'00:10' }) 
	breakHours: string;
	
	
}
