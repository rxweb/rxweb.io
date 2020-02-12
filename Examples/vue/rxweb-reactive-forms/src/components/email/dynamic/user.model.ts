import {  email,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	email: string;

	@prop()
	businessEmailAddress: string;

	@prop()
	otherEmailAddress: string;

	@prop()
	organizationEmailAddress: string;

}
