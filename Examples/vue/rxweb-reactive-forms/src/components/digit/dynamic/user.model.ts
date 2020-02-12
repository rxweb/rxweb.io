import {  digit,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	age: number;

	@prop()
	faxNumber: number;

	@prop()
	mobileNumber: number;

	@prop()
	zipCode: number;

}
