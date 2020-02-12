import {  greaterThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	admissionAge: number;

	@prop()
	retiermentAge: number;

	@prop()
	minimumAge: number;

	@prop()
	memberAge: number;

	@prop()
	otherAge: number;

	@prop()
	joiningAge: number;

}
