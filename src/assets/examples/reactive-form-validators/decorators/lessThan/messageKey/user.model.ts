import {  lessThan, } from   "@rxweb/reactive-form-validators"   

export class User {

	@lessThan({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey' }) 
	disciplineMarks: number;
	
	
}
