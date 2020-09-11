import {  numericAsync, NumericValueType, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@numericAsync({validatorConfig:of({allowDecimal:true}) })
	decimalNumber: number;
	
	
}
