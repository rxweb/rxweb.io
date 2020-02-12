import {  lessThan,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	marks: number;

	@lessThan({fieldName:'marks' }) 
	passingMarks: number;
	
	
}
