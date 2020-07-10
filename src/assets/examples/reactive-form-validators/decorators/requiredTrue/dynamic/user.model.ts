import {  requiredTrue,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	isAgree: boolean;

	@prop()
	checkMeOut: boolean;

	@prop()
	isActive: string;

	@prop()
	isBlocked: string;

}
