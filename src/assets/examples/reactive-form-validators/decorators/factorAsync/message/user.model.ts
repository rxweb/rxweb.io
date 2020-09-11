import {  factorAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@factorAsync({validatorConfig:of({dividend:30  ,message:'{{0}} is not a factor of 50'}) })
	sixthNumber: number;
	
	
}
