import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({value:'11:00' }) 
	entryTime: string;
	
	
}
