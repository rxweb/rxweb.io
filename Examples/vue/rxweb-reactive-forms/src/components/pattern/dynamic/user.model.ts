import {  pattern,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	userName: string;

	@prop()
	zipCode: string;

	@prop()
	age: string;

	@prop()
	pinCode: string;

}
