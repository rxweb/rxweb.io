import {  lessThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'}) })
	passingMarks: number;
	
	
	@lessThanEqualToAsync({validatorConfig:of({value:60}) })
	maximumAge: number;
	
	
	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,message:'Please enter number less than 100.'}) })
	otherMarks: number;
	
	
	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey'}) })
	disciplineMarks: number;
	
	
}
