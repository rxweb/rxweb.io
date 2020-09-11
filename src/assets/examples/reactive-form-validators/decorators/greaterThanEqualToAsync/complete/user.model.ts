import {  greaterThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	admissionAge: number;

	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'}) })
	retiermentAge: number;
	
	
	@greaterThanEqualToAsync({validatorConfig:of({value:18}) })
	minimumAge: number;
	
	
	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.'}) })
	otherAge: number;
	
	
	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey'}) })
	joiningAge: number;
	
	
}
