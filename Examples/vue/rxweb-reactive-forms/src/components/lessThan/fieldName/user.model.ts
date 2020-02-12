import {  lessThan,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	obtainedMarks: number;

	@lessThan({fieldName:'obtainedMarks' }) 
	otherActivityMarks: number;
	
	
}
