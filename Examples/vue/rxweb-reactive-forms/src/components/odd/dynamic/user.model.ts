import {  odd,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	type: string;

	@prop()
	oddNumber: number;

	@prop()
	multiplesOfOddNumber: number;

	@prop()
	otherOddNumber: string;

}
