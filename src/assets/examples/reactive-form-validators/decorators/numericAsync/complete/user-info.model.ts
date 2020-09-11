import {  numericAsync,prop, NumericValueType, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	dataType: string;

	@numericAsync({validatorConfig:of({acceptValue:NumericValueType.NegativeNumber}) })
	negativeNumber: number;
	
	
	@numericAsync({validatorConfig:of({isFormat:true}) })
	totalAmount: number;
	
	
	@numericAsync({validatorConfig:of({allowDecimal:true}) })
	decimalNumber: number;
	
	
	@numericAsync({validatorConfig:of({message:'{{0}} is not a positive number'}) })
	positiveNumber: number;
	
	
	@numericAsync({validatorConfig:of({messageKey:'numericMessageKey'}) })
	positiveNonDecimalNumber: number;
	
	
}
