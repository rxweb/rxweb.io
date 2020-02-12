import {  time, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@time({messageKey:'timeMessageKey' }) 
	netInTime: string;
	
	
}
