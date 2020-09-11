import {  greaterThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	admissionAge: number;

	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'}) })
	retiermentAge: number;
	
	
}
