import {  minTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@minTime({operator:'>'  ,value:'08:30' }) 
	requiredHours: string;
	
	
}
