import {  numeric, NumericValueType, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@numeric({messageKey:'numericMessageKey' }) 
	positiveNonDecimalNumber: number;
	
	
}
