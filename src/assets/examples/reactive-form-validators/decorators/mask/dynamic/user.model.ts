import {  mask,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	firstName: string;

	@prop()
	phoneNumber: string;

	@prop()
	macNumber: string;

	@prop()
	zipcode: string;

	@prop()
	contactNumber: string;

	@prop()
	residentalContactNumber: string;

	@prop()
	alternateContactNumber: string;

}
