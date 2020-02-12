import {  lessThanEqualTo, prop } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualTo({fieldName:'totalMarks'  ,message:'Please enter number which is less than or equal to above field input.' }) 
	otherMarks: number;
		
}