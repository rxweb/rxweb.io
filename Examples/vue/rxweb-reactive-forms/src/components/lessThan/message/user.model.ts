import {  lessThan, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThan({fieldName:'obtainedMarks'  ,message:'Please enter number greater than 100.' }) 
	otherMarks: number;
	
	
}
