import {  contains,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	emailAddress: string;

	@prop()
	recoveryEmailAddress: string;

	@prop()
	otherEmailAddress: string;

	@prop()
	organizationEmailAddress: string;

}
