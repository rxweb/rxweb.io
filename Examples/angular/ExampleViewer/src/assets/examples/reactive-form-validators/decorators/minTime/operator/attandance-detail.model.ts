import {  minTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@minTime({operator:'>'  ,value:'08:30' }) 
	requiredHours: string;
	
	
}
