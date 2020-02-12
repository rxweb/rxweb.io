import {  lowerCase,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	username: string;

	@prop()
	middleName: string;

	@prop()
	lastName: string;

	@prop()
	state: string;

}
