import {  lessThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	obtainedMarks: number;

	@lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'}) })
	otherActivityMarks: number;
	
	
	@lessThanAsync({validatorConfig:of({value:60}) })
	maximumAge: number;
	
	
	@lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'  ,message:'Please enter number greater than 100.'}) })
	otherMarks: number;
	
	
	@lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'  ,messageKey:'lessThanMessageKey'}) })
	disciplineMarks: number;
	
	
}
