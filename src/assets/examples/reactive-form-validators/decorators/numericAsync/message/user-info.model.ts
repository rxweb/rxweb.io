import {  numericAsync, NumericValueType, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@numericAsync({validatorConfig:of({message:'{{0}} is not a positive number'}) })
	positiveNumber: number;
	
	
}
