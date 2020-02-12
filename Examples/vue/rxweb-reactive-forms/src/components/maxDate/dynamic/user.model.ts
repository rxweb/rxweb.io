import {  maxDate,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	userName: string;

	@prop()
	allocationDate: string;

	@prop()
	admissionDate: string;

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
