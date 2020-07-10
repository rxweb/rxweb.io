import {  mask,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	firstName: string;

	@prop()
	phoneNumber: string;

	@prop()
	zipcode: string;

	@prop()
	contactNumber: string;

	@prop()
	alternateContactNumber: string;

}
