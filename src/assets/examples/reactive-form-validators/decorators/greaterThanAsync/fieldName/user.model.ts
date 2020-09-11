import {  greaterThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	age: number;

	@greaterThanAsync({validatorConfig:of({fieldName:'age'}) })
	retiermentAge: number;
	
	
}
