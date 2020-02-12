import {  greaterThan,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	age: number;

	@prop()
	retiermentAge: number;

	@prop()
	minimumAge: number;

	@prop()
	voterAge: number;

	@prop()
	otherAge: number;

	@prop()
	joiningAge: number;

}
