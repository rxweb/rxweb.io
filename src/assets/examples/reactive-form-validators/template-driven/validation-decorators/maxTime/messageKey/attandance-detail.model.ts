import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' }) 
	netInTime: string;
	
	
}
