import {  lessThanEqualTo, } from   "@rxweb/reactive-forms"   

export class User {

	@lessThanEqualTo({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' }) 
	disciplineMarks: number;
	
	
}
