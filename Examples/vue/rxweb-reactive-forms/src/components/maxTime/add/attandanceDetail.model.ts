import {  maxTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@maxTime({value:'11:00' }) 
	entryTime: string;
	
	
}
