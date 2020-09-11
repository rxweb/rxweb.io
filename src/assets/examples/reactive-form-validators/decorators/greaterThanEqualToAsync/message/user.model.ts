import {  greaterThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.'}) })
	otherAge: number;
	
	
}
