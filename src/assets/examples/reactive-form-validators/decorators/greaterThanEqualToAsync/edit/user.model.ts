import {  greaterThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	age: number;

	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'age'}) })
	voterAge: number;
	
	
}
