import {  numeric, NumericValueType, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@numeric({digitsInfo:'1.0-2'  ,isFormat:true  ,allowDecimal:true }) 
	formattedDecimalNumber: number;
	
	
}
