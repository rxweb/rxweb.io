import {  lessThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'  ,message:'Please enter number less than 100.'}) })
	otherMarks: number;
	
	
}
