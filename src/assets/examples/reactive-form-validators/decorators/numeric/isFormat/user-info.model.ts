import {  numeric, NumericValueType, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@numeric({isFormat:true }) 
	totalAmount: number;
	
	
}
