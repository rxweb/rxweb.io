import {  lessThanEqualTo, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualTo({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' }) 
	disciplineMarks: number;
	
}