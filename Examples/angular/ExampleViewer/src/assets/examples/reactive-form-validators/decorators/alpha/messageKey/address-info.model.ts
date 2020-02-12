import {  alpha, } from   "@rxweb/reactive-form-validators"   

export class AddressInfo {

	@alpha({messageKey:'alphaMessageKey' }) 
	cityCode: string;
	
	
}
