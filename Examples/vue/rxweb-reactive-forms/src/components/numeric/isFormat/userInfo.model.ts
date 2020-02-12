import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({isFormat:true }) 
	totalAmount: number;
	
	
}
