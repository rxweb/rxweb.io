import {  date,prop, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@prop()
	birthDate: string;

	@prop()
	registrationDate: string;

	@prop()
	enrollmentDate: string;

	@prop()
	allocationDate: string;

	@prop()
	confirmationDate: string;

}
