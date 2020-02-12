import {  lessThan, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThan({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey' }) 
	disciplineMarks: number;
	
	
}
