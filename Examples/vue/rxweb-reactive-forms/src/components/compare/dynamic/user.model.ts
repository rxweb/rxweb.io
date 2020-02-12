import {  compare,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	email: string;

	@prop()
	confirmEmail: string;

	@prop()
	password: string;

	@prop()
	confirmPassword: string;

	@prop()
	contactNumber: string;

	@prop()
	confirmContactNumber: string;

}
