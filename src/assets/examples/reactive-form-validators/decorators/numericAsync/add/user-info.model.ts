import {  numericAsync, NumericValueType, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@numericAsync({validatorConfig:of({acceptValue:NumericValueType.PositiveNumber  ,allowDecimal:false}) })
	integerNumber: number;
	
	
}
