import {  lessThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey'}) })
	disciplineMarks: number;
	
	
}
