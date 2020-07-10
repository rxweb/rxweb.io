import {  numeric, NumericValueType,toFloat } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@numeric({isFormat:true,allowDecimal:true }) 
    @toFloat()
	totalAmount: number;

}