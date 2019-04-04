import {  lessThanEqualTo, } from   "@rxweb/reactive-form-validators"   

export class User {

	@lessThanEqualTo({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' }) 
	disciplineMarks: number;
	
	
}
