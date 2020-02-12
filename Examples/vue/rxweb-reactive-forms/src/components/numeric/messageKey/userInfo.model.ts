import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({messageKey:'numericMessageKey' }) 
	positiveNonDecimalNumber: number;
	
	
}
