import {  lessThan, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	obtainedMarks: number;

	@lessThan({fieldName:'obtainedMarks'  ,message:'Please enter number which is less than above field input.' }) 
	otherMarks: number;
		
}