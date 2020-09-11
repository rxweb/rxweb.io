import {  numericAsync,prop, NumericValueType, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	dataType: string;

	@prop()
	negativeNumber: number;

	@prop()
	totalAmount: number;

	@prop()
	decimalNumber: number;

	@prop()
	positiveNumber: number;

	@prop()
	positiveNonDecimalNumber: number;

}
