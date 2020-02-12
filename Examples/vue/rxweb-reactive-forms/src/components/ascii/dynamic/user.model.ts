import {  ascii,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	language: string;

	@prop()
	alphabetAsciiCode: string;

	@prop()
	specialCharAsciiCode: string;

	@prop()
	digitalCode: string;

}
