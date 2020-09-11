import {  greaterThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@greaterThanEqualToAsync({validatorConfig:of({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey'}) })
	joiningAge: number;
	
	
}
