import {  minTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@minTime({value:'08:00' }) 
	entryTime: string;
	
	
}
