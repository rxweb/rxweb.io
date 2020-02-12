import {  leapYear,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	name: string;

	@prop()
	admissionYear: number;

	@prop()
	joiningYear: number;

	@prop()
	promotionYear: number;

}
