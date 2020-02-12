import {  different,prop, } from   "@rxweb/reactive-forms"   

export class AccountInfo {

	@prop()
	firstName: string;

	@prop()
	lastName: string;

	@prop()
	middleName: string;

	@prop()
	emailAddress: string;

	@prop()
	recoveryEmailAddress: string;

}
