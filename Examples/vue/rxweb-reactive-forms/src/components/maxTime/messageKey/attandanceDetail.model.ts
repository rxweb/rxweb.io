import {  maxTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' }) 
	netInTime: string;
	
	
}
