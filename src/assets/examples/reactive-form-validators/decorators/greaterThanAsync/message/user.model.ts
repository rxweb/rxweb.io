import {  greaterThanAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@greaterThanAsync({validatorConfig:of({fieldName:'age'  ,message:'Please enter number greater than 0.'}) })
	otherAge: number;
	
	
}
