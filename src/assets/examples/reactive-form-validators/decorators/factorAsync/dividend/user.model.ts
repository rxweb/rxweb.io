import {  factorAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@factorAsync({validatorConfig:of({dividend:50}) })
	fourthNumber: number;
	
	
}
