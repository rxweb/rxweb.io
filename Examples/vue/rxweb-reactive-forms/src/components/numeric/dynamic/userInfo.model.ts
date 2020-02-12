import {  numeric,prop, NumericValueType, } from   "@rxweb/reactive-forms"   

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
	realNumber: number;

	@prop()
	positiveNumber: number;

	@prop()
	positiveNonDecimalNumber: number;

}
