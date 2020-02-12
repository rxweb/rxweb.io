import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({allowDecimal:true }) 
	decimalNumber: number;
	
	
}
