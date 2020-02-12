import {  required,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	firstName: string;

	@prop()
	lastName: string;

	@prop()
	userName: string;

	@prop()
	fullName: string;

}
