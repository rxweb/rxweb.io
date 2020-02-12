import {  date,prop, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@prop()
	birthDate: string;

	@prop()
	enrollmentDate: string;

	@prop()
	allocationDate: string;

	@prop()
	confirmationDate: string;

}
