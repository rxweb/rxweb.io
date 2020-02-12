import {  even,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	type: string;

	@prop()
	evenNumber: number;

	@prop()
	multiplesOfEvenNumber: number;

	@prop()
	otherEvenNumber: string;

}
