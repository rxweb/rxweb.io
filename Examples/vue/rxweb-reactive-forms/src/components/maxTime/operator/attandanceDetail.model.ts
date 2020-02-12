import {  maxTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@maxTime({operator:'<'  ,value:'00:10' }) 
	breakHours: string;
	
	
}
