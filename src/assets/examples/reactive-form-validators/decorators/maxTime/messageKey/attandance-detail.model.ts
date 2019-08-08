import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({value:'12:30' }) 
	totalInTime: string;

	@maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' }) 
	netInTime: string;
	
}
