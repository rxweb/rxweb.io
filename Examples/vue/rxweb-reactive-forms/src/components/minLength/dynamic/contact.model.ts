import {  minLength,prop, } from   "@rxweb/reactive-forms"   

export class Contact {

	@prop()
	countryName: string;

	@prop()
	mobileNo: string;

	@prop()
	landLineNo: string;

	@prop()
	stateCode: string;

	@prop()
	stateName: string;

}
