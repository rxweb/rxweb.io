import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false }) 
	integerNumber: number;
	
	
}
