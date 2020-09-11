import {  maxDateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	userName: string;

	@prop()
	allocationDate: string;

	@prop()
	registrationDate: string;

	@prop()
	enrollmentDate: string;

	@prop()
	lastRegistrationDate: string;

	@prop()
	confirmationDate: string;

	@prop()
	resignationDate: string;

}
