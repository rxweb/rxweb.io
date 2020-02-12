import {  lessThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThanEqualTo({fieldName:'totalMarks'  ,message:'Please enter number less than 100.' }) 
	otherMarks: number;
	
	
}
