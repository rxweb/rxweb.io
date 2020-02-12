import {  lessThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualTo({fieldName:'totalMarks' }) 
	marks: number;
	
	
}
