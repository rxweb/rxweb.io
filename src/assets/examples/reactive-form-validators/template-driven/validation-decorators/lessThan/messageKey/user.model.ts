import {  lessThan, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	obtainedMarks: number;

	@lessThan({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey' }) 
	disciplineMarks: number;
		
}