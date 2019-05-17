import {  minTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@minTime({value:'08:00' }) 
	openingTime: string;
	
	
}
