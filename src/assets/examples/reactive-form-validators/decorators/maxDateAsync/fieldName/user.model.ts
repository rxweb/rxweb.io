import {  maxDateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	enrollmentDate: string;

	@maxDateAsync({validatorConfig:of({fieldName:'enrollmentDate'}) })
	lastRegistrationDate: string;
	
	
}
