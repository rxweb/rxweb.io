import {  maxTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@maxTime({value:'23:30' }) 
	closingTime: string;
	
	
}
