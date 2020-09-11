import {  minDateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	enrollmentDate: string;

	@minDateAsync({validatorConfig:of({fieldName:'enrollmentDate'}) })
	lastRegistrationDate: string;
	
	
}
