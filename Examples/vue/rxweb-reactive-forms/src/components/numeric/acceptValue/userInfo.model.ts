import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({acceptValue:NumericValueType.NegativeNumber }) 
	negativeNumber: number;
	
	
}
