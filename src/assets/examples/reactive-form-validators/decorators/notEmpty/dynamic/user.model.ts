import {  notEmpty,prop, } from   "@rxweb/reactive-form-validators"   

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
